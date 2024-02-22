import { Text, View, Pressable, Image } from "react-native"
import { styles } from "./ProfileStyleSheet"
import { auth } from "../../firebase"
import { useState } from "react"
import { useEffect } from "react"
import { getUserByUid } from "../Repository/UserRepository"

export const Profile = ({ navigation }) => {
    const [user, setUser] = useState()

    const handleSignout = () => {
        auth.signOut()
            .then(() => {
                console.log("Utilisateur déconnecté")

                navigation.navigate('Login')
            })
            .catch((e) => console.log(e)) 
    }

    useEffect(() => {
        getUserByUid(auth.currentUser.uid)
        .then(res => setUser(res))
    }, [])

    return (
        <View style={styles.profileContainer}>
            <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>

            {
                user !== undefined ? (
                    <Text>{user.firstname + ' ' + user.lastname}</Text>
                ) : (
                    <Text>Invité</Text>
                )
            }
            <Pressable style={styles.profileButton} onPress={handleSignout}>
                <Text style={styles.profileButtonText}>Se déconnecter</Text>
            </Pressable>
        </View>
    )
}