import { Text, View, Button } from "react-native"
import { styles } from "./ProfileStyleSheet"
import { auth } from "../../firebase"

export const Profile = ({ navigation }) => {
    const handleSignout = () => {
        auth.signOut()
            .then(() => {
                console.log("Utilisateur déconnecté")

                navigation.navigate('Login')
            })
            .catch((e) => console.log(e)) 
    }

    return (
        <View style={styles.profileContainer}>
            <Text>Profile.js</Text>
            <Button title="Se déconnecter" onPress={handleSignout} />
        </View>
    )
}