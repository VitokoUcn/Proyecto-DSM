import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, } from 'react-native';
import { styles, stylesProfile } from '../../theme/profileTheme';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';






const ProfileScreen = () => {
    const navigation = useNavigation();
    const goToBottomNavigator = () => {
    };
    return (
        <>
        <Background />
        <View style={stylesProfile.container}>
            <View style={stylesProfile.profileHeader}>
                <Text style={stylesProfile.username}>JhonDev</Text>
            </View>
            
            <View style={stylesProfile.profileImageContainer}>
                <Image
                    source={{ uri: 'https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png' }}
                    style={stylesProfile.profileImage}
                />
            </View>
            
            
            <View style={stylesProfile.profileStats}>
                <View style={stylesProfile.profileInfo}>
                <Text style={stylesProfile.realName}>John Doe</Text>
                <Text style={stylesProfile.role}>Database Administrator</Text>
            </View>
            <View style={stylesProfile.stat}>
                    <Text style={stylesProfile.statCount}>4</Text>
                    <Text style={stylesProfile.statLabel}>Posts</Text>
                </View>
            </View>
            
            <View style={stylesProfile.profileBio}>
            
                <View style={stylesProfile.profileStats}>
                <Text style={stylesProfile.bioHeading}>Soft Skills:</Text>
                <Text style={stylesProfile.box }>Creatividad</Text>
                <Text style={stylesProfile.box }>Pensamiento Critico</Text>
                </View>
                <Text style={stylesProfile.bioText}>Administrador senior de base de datos
Alegre y fiel trabajador</Text>
            </View>
            <View style={stylesProfile.buttonAlign}>
                <TouchableOpacity style={stylesProfile.editProfileButton}>
                    <Text style={stylesProfile.editProfileButtonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesProfile.editProfileButton}>
                    <Text style={stylesProfile.editProfileButtonText}>Descargar CV</Text>
                </TouchableOpacity>
            </View>
            <View style={stylesProfile.profilePosts}>
                {/* Post deberian ir aqui */}
            </View>
            
            
        </View>


        </>
    );
};




export default ProfileScreen;
