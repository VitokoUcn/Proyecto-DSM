import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import userApi from '../api/userApi';

export const HomeScreen = () => {
  const { logOut } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  // Crea un estado local para guardar el resultado de la petición
  const [data, setData] = useState([]);

  const loadPosts = async () => {
    // Usa await para esperar a que se resuelva la promesa
    const response = await userApi.get('http://192.168.1.85:8000/api/posts');
    // Actualiza el estado con el nuevo valor
    setData(response.data);
    console.log(response.data);
    console.log(data);
  }

  useEffect(() => {
    // Ejecuta la función loadPosts solo una vez al montar el componente
    loadPosts();
  }, []);

  

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Image source={{uri: item.image}} style={{width: 200, height: 200}} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <FlatList
        data={data} // Usa el estado local en lugar del estado global
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={logOut}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  logoutButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
