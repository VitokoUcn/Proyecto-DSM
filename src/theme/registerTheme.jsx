import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
   
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    newUserContainer: {
        alignItems: 'flex-end',
        color:'white',
        marginTop: 10
    },
    title: {
        
        color: 'white',
        fontSize: 52,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    label2: {
        marginTop: 25,
        color: 'white',
        marginHorizontal: 5,
        fontSize: 20,
        paddingBottom: 10,
        marginTop: 10
    },
    label3: {
        
        textAlign: 'center',
        color: 'white',
        marginHorizontal: 5,
        fontSize: 20,
        paddingBottom: 10,
        marginTop: 30
    },

    input: {
        backgroundColor: 'black',
        color:'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20
    }, 
    buttonContainer: {
        alignItems: 'center',
        marginTop: 25

    },
    button: {
        borderWidth: 4,
        borderColor: '#2c64c6',
        backgroundColor: '#2c64c6',
        paddingHorizontal: 112,
        paddingVertical: 6,
        marginVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    linkText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputField: {
        color: 'white',
        fontSize: 20
    },
    registerContainer: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    buttonRegister: {
        borderWidth: 4,
        borderColor: '#2c64c6',
        backgroundColor: '#2c64c6',
        paddingHorizontal: 130,
        paddingVertical: 1,
        marginVertical: 10,
        borderRadius: 10
    },
    buttonRegisterText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    linkRegisterText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    inputFieldRegister: {
        color: 'white',
        marginTop: 50,
        fontSize: 20
    },
    loginContainer: {
        alignItems: 'flex-end'
    },
    
});