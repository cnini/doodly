import { Text, View, Pressable, Image } from "react-native"
import { styles } from "./ProfileStyleSheet"
import { auth } from "../../firebase"
import { useDispatch, useSelector } from "react-redux"
import { resetCurrentUser } from "../Slices/CurrentUserSlice"
import { resetOrders } from "../Slices/OrderSlice"

export const Profile = ({ navigation }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    const handleSignout = () => {
        auth.signOut()
            .then(() => {
                dispatch(resetCurrentUser())
                dispatch(resetOrders())
                
                console.log("Utilisateur déconnecté")

                navigation.navigate('Login')
            })
            .catch((e) => console.log(e)) 
    }

    return (
        <View style={styles.profileContainer}>
            <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>

            {
                currentUser !== undefined ? (
                    <View>
                        <Text>{currentUser.firstname + ' ' + currentUser.lastname}</Text>
                        <Pressable style={styles.profileButton} onPress={handleSignout}>
                            <Text style={styles.profileButtonText}>Se déconnecter</Text>
                        </Pressable>
                    </View>
                ) : (
                    <Text>Invité</Text>
                )
            }
        </View>
    )
}