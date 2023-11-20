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
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 0,
        textAlign: 'center'
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    label2: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15
    }, 
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 4,
        borderColor: '#2C64C6',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        placeContent: 'center',
        
    },
});
