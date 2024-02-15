import { Text, View, Button } from "react-native"
import { styles } from "./HomeStyleSheet"
import { auth } from "../../firebase"

export const Home = () => {
    const handleSignout = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                auth.signOut()
                .then(() => console.log("Utilisateur déconnecté"))
                .catch((e) => console.log(e))
            } else {
                console.log("Aucun utilisateur connecté")
            }
        })   
    }

    return (
        <View style={styles.homeContainer}>
            <Text>Home.js</Text>
            <Button title="Se déconnecter" onPress={handleSignout} />
        </View>
    )
}