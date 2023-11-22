import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { userApi } from '../api/userApi';
import { loginStyles } from '../theme/loginTheme';
import { Background } from '../components/Background';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';

const LoginScreen = ({ navigation }) => {

    // Llamar a hooks
    const { signIn } = useContext(AuthContext);
    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });



    // Crear funciones
    const irRegistro = () => {
        // console.log('reaciona');
        navigation.navigate('Register')
    }

    const consultarAPI = async () => {
        const response = await userApi.get('http://192.168.0.2:8000/api/users');
        console.log(response.data);
    }

    const onLogin = () => {
        Keyboard.dismiss();
        signIn({ email, password })
    }
    const irPerfil = () => {
        navigation.navigate('Profile')
    }

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                <View style={loginStyles.formContainer}>
                    <Text style={loginStyles.title}>SocialDEV</Text>
                    {/* <Text style={loginStyles.label}>Email</Text> */}
                    <TextInput
                        style={{...loginStyles.input, borderColor: '#2c64c6', borderWidth: 1}}

                        placeholder='Correo Electrónico'
                        placeholderTextColor="white"
                        keyboardType='email-address'
                       

                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                    />

                    {/* Contraseña */}
                    {/* <Text style={loginStyles.label}>Contraseña</Text> */}
                    <TextInput
                        style={{...loginStyles.input, borderColor: '#2c64c6', borderWidth: 1}}
                        placeholder='Contraseña'
                        placeholderTextColor="white"
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />
                    {/* Boton login */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            {/* <Text style={loginStyles.buttonText,}>ENTRAR</Text> */}
                        <Text style={{...loginStyles.buttonText}}>ENTRAR</Text>
                        </TouchableOpacity>

                    </View>
                    
                </View>
                <View style={{justifyContent: 'flex-end', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={loginStyles.label2}>¿No tienes una cuenta?</Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={irRegistro}
                            >
                                <Text style={loginStyles.linkText}>REGÍSTRATE</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAvoidingView>
            
        </>
    );

};

const styles = StyleSheet.create({
    button: {
        'backgroundColor': 'red',
        'padding': 4,
        'marginHorizontal': 40,
        'marginVertical': 30,
        'borderRadius': 10
    },

    button2: {
        'backgroundColor': 'blue',
        'padding': 4,
        'marginHorizontal': 40,
        'marginVertical': 30,
        'borderRadius': 10
    },

});

export default LoginScreen;

