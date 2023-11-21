import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel) {
        setImagePath(response.uri);
      }
    });
  };

  const handleSubmit = () => {
    // Aquí puedes realizar acciones con los datos del post (title, description, imagePath)
    // Por ejemplo, enviar los datos a una API o guardar en una base de datos.
    // Luego, puedes navegar a otra pantalla si es necesario.
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
    backgroundColor: 'brown', // Cambia el color del botón de seleccionar imagen
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  publishButton: {
    backgroundColor: 'blue', // Cambia el color del botón de publicar
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
