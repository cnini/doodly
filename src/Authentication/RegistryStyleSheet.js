import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    registryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    inputLabel: {
        fontSize: 12,
        textTransform: 'uppercase',
        marginStart: 10,
        textAlign: 'center'
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

    loginBtn: {
        width: "100%",
        borderRadius: 90,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#d2bbf3",
    },

    loginText: {
        color: "white",
    },

    linkZone: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    link: {
        marginStart: 5,
        color: '#d2bbf3'
    },
})