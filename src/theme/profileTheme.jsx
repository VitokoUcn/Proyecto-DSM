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
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 16,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 8,
    },
    editProfileButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    editProfileButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileStats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    stat: {
        alignItems: 'center',
    },
    statCount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#888',
    },
    profileBio: {
        marginBottom: 16,
    },
    bioHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bioText: {
        fontSize: 16,
        color: '#888',
    },
    profilePosts: {
        flex: 1,
    },
});