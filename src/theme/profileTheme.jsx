import { StyleSheet } from 'react-native';
export const stylesProfile = StyleSheet.create({
    

    container: {
        flex: 1,
        padding: 16,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 20,
        
    },
    realName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "white"
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 16,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 8,
        color: "white"
    },
    editProfileButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        
    },
    editProfileButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    box: {
        width: 120,
        height: 30,
        backgroundColor:'#545454',
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    profileStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    role: {
        color: "white"
    },
    stat: {
        alignItems: 'center',
    },
    buttonAlign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40
    },
    statCount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 30,
        color: "white"
    },
    statLabel: {
        fontSize: 14,
        color: '#888',
        marginRight: 30,
        color: "white"
    },
    profileBio: {
        marginBottom: 16,

        
    },
    bioHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: "white"
    },
    bioText: {
        fontSize: 16,
        color: '#888',
        color: "white"
    },
    profilePosts: {
        flex: 1,
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    burgerButton: {
    color: 'white',
    backgroundColor: 'white'

    }
    
});