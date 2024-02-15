import { Text, View, TextInput, Button } from "react-native"
import { styles } from "./LoginStyleSheet"
import { useState } from "react"
import { auth } from "../../firebase"

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignin = () => {
        if (email !== "" && password !== "") {
            auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("Utilisateur connecté")
                navigation.navigate('Home')
            })
            .catch((e) => console.log(e))
        }
    }

    return (
        <View style={styles.loginContainer}>
            <Text style={styles.inputLabel}>Adresse mail</Text>
            <TextInput style={styles.inputBox} onChangeText={setEmail}/>

            <Text style={styles.inputLabel}>Mot de passe</Text>
            <TextInput style={styles.inputBox} secureTextEntry={true} onChangeText={setPassword}/>

            <Button title="Se connecter" onPress={handleSignin}/>
        </View>
    )
}