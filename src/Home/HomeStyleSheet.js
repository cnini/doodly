import { StyleSheet } from "react-native"
import { auth } from "../../firebase"

export const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },

    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 80
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