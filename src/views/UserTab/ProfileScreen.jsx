

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles, stylesProfile } from '../../theme/profileTheme';


const ProfileScreen = () => {
    return (
        <View style={stylesProfile.container}>
            <View style={stylesProfile.profileHeader}>
                <Text style={stylesProfile.username}>Username</Text>
            </View>
            
            <View style={stylesProfile.profileImageContainer}>
                <Image
                    source={{ uri: 'https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png' }}
                    style={stylesProfile.profileImage}
                />
            </View>
            
            <View style={stylesProfile.profileStats}>
                <View style={stylesProfile.stat}>
                    <Text style={stylesProfile.statCount}>100</Text>
                    <Text style={stylesProfile.statLabel}>Posts</Text>
                </View>
            </View>
            
            <View style={stylesProfile.profileBio}>
                <Text style={stylesProfile.bioHeading}>Bio</Text>
                <Text style={stylesProfile.bioText}>This is my bio</Text>
            </View>
            
            <View style={stylesProfile.profilePosts}>
                {/* Add your profile posts here */}
            </View>
            
            <TouchableOpacity style={stylesProfile.burgerButton}>
                <Image
                    source={{ uri: 'https://example.com/burger-icon.png' }}
                    style={stylesProfile.burgerIcon}
                />
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;
