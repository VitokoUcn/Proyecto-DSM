import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert, StyleSheet} from 'react-native';
import { loginStyles } from '../theme/registerTheme';
import { Background } from '../components/Background';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Picker } from '@react-native-picker/picker';
import React, { useState, useContext } from 'react';
import CheckBox from '@react-native-community/checkbox';




const RegisterScreen = ({ navigation }) => {

    const { signUp } = useContext(AuthContext);
    const {name, lastName, userName, email, password, onChange}= useForm({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    });

    const onSignIn = () => {
        Keyboard.dismiss();
        signUp({ name, email, password })
    }

    const [selectedSkill, setSelectedSkill] = useState('');

    const skills = ['Res. de Problemas', 'Pensamiento Analitico', 'Trabajo en equipo', 'Creatividad', 'Comunicacion', 'Autodidactismo'];


    const [selectedSkills, setSelectedSkills] = useState([]);
    
    const onCheck = (skill) => {
        if (selectedSkills.includes(skill)) {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else {
        setSelectedSkills([...selectedSkills, skill]);
        }
    };

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
                    <Text style={loginStyles.title}>SocialDev</Text>
                    <Text style={loginStyles.label3}>Registrate para compartir y conocer a otros desarrolladores</Text>
                    

                    {/* Email */}
                    
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

                    {/* Nombre */}
                    <TextInput
                        style={{...loginStyles.input, borderColor: '#2c64c6', borderWidth: 1}}
                        placeholder='Nombre Completo'
                        placeholderTextColor="white"

                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                    />

                    {/* Apellido */}
                    <TextInput
                        style={{...loginStyles.input, borderColor: '#2c64c6', borderWidth: 1}}
                        placeholder='Apellido'
                        placeholderTextColor="white"

                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'lastName')}
                        value={lastName}
                    />

                    {/* Nombre de usuario*/}
                    <TextInput
                        style={{...loginStyles.input, borderColor: '#2c64c6', borderWidth: 1}}
                        placeholder='Nombre de Usuario'
                        placeholderTextColor="white"
                        //TODO: cambiar la variable de nombre de usuario
                        autoCapitalize="words"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'userName')}
                        value={userName}
                    />

                    {/* Contraseña */}
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

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {skills.map((skill) => (
                            <View key={skill} style={{ width: '50%', flexDirection: 'row', alignItems: 'center', borderColor: '#2c64c6', borderWidth: 1  }}>
                                <CheckBox 
                                    value={selectedSkills.includes(skill)} 
                                    onValueChange={() => onCheck(skill)} 
                                    tintColors={{ true: 'white', false: 'white' }}
                                />
                                <Text style={{ color: '#FFFFFF' }}>{skill}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Boton registro */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onSignIn}
                        >
                            <Text style={{...loginStyles.buttonText}}>REGISTRARSE</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}

                    <View style={{justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={loginStyles.label2}>¿Ya tienes una cuenta?</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.replace('Login')}
                                >
                                    <Text style={loginStyles.linkText}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
            </KeyboardAvoidingView>
        </>
    )
    
}
export default RegisterScreen;