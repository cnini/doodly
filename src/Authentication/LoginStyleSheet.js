import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    linkZone: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    link: {
        marginStart: 5,
        color: "#d2bbf3",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        maxWidth: 250,
        maxHeight: 150,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    inputView: {
        borderColor: "#C9C9C9",
        width: "70%",
        height: 55,
        marginBottom: 20,
        alignItems: "center",
        
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        backgroundColor: "#ECECEC",
        borderRadius: 30,
        width: "80%",
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "40%",
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
    label: {
        textAlign: "left",
    },
})