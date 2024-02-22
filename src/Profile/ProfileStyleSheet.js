import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    profileButton: {
        width: 200,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 50,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    profileButtonText: {
        color: '#FFF'
    },
    
})