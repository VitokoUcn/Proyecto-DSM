import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');  // Estado para el título
  const [description, setDescription] = useState('');  // Estado para la descripción
  const [imagePath, setImagePath] = useState(null);  // Estado para la ruta de la imagen

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setImagePath(response.uri);
      }
    });
  };

  const handleSubmit = async () => {
    // Construir el objeto de datos del post
    const postData = {
      title,
      description,
      pathImage: imagePath,
      likes: 0,
      comments: 0,
    };

    // Enviar datos a la API
    try {
      const response = await fetch('http://192.168.1.85:8000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // El post se creó exitosamente, puedes realizar acciones adicionales si es necesario
        console.log('Post creado con éxito');
        // Navegar a otra pantalla si es necesario
        // navigation.navigate('OtraPantalla');
      } else {
        // La creación del post falló, manejar el error según sea necesario
        console.error('Error al crear el post');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };

  return (
    <>
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

        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Seleccionar Imagen</Text>
        </TouchableOpacity>

        {imagePath && <Image source={{ uri: imagePath }} style={styles.imagePreview} />}

        <TouchableOpacity style={styles.publishButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    resizeMode: 'cover',
    marginBottom: 16,
  },
});

export default CreatePostScreen;
