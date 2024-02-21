import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    loginContainer: {
        width: '100%',
        paddingHorizontal: 50,
        flex: 1,
        justifyContent: 'center'
    },

    inputLabel: {
        fontSize: 12,
        textTransform: 'uppercase',
        marginStart: 10
    },

    inputBox: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 20
    },

    linkZone: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    link: {
        marginStart: 5,
        color: 'purple'
    },
})