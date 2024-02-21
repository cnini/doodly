import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    homeTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 20
    },

    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 80,
        marginTop: 20
    },

    homeButton: {
        position: 'absolute',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 30,
        backgroundColor: '#000',
        borderRadius: 50,
    },

    homeButtonText: {
        color: '#FFF'
    },
    
})