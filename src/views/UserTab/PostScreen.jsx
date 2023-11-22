import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import userApi from '../../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');  // Estado para el título
  const [description, setDescription] = useState('');  // Estado para la descripción
  const [imagePath, setImagePath] = useState(null);  // Estado para la ruta de la imagen

  const pickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 0 });
    if (!result.didCancel) {
      setImagePath(result.assets[0].uri);
    }
  };  

  const handleSubmit = async () => {
    // Verificar si se ha seleccionado una imagen
    if (!imagePath) {
      console.error('Por favor, selecciona una imagen antes de publicar.');
      return;
    }
  
  
    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', {
      uri: imagePath,
      type: 'image/jpeg', // Ajusta el tipo de imagen según sea necesario
      name: 'image.jpg',
    });
  
    // Enviar datos a la API
    try {
      console.log('Enviando datos a la API...');
      console.log('Título:', title);
      console.log('Descripción:', description);
      console.log('Imagen:', imagePath);
      const token = await AsyncStorage.getItem('token');
      const response = await userApi.post('/post', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        // El post se creó exitosamente, puedes realizar acciones adicionales si es necesario
        console.log('Post creado con éxito');
        // Navegar a otra pantalla si es necesario
        // navigation.navigate('OtraPantalla');
      } else {
        // La creación del post falló, manejar el error según sea necesario
        console.error('Error al crear el post', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };

  return (
    <>
      
      <View style={styles.titleContainer}>

        <Text style={styles.title}>Nueva Publicación</Text> 

      </View>


      <View style={styles.container}>


        <Text style={styles.label}>Título:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
        />

        {imagePath && <Image source={{ uri: imagePath }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.publishButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    borderColor: '#ccc',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#f0f0f0',
    marginTop: 100,
  },
  titleContainer: {
    padding: 0,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 100,
  },
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  imageButton: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  publishButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    resizeMode: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default CreatePostScreen;
