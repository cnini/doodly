import { Text, View, TextInput, Pressable, ScrollView, Image } from "react-native"
import { Link } from '@react-navigation/native'
import { styles } from "./RegistryStyleSheet"
import { User } from "../Model/User"
import { auth } from "../../firebase"
import { addUser } from "../Repository/UserRepository"

export const Registry = ({ navigation }) => {
    const { user, setUserData } = User()

    const handleRegistration = async () => {
        const uid = await auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => res.user.uid)
        .catch((e) => console.log(e))

        user.uid = uid

        addUser(user)

        navigation.navigate('Login')
    }

    return (
        <View style={styles.registryContainer}>
            <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>
            <ScrollView>
                <View style={{ paddingHorizontal: 15, paddingBottom: 80, marginTop: 100 }}>
                    <Text style={styles.inputLabel}>Prénom</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('firstname', v)}/>

                    <Text style={styles.inputLabel}>Nom</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('lastname', v)}/>
                    
                    <Text style={styles.inputLabel}>Adresse mail</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('email', v)}/>

                    <Text style={styles.inputLabel}>Mot de passe</Text>
                    <TextInput style={styles.inputBox} secureTextEntry={true} onChangeText={(v) => setUserData('password', v)}/>

                    <Text style={styles.inputLabel}>Adresse postale</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('address', v)}/>
                    
                    <Text style={styles.inputLabel}>Code postale</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('zipcode', v)}/>
                    
                    <Text style={styles.inputLabel}>Ville</Text>
                    <TextInput style={styles.inputBox} onChangeText={(v) => setUserData('city', v)}/>

                    <Pressable style={styles.loginBtn} onPress={handleRegistration}>
                        <Text style={styles.loginText}>S'INSCRIRE</Text> 
                    </Pressable>

                    <View style={styles.linkZone}>
                        <Text>Vous avez déjà un compte ?</Text>
                        <Link style={styles.link} to={{ screen: 'Login' }}>Connectez-vous !</Link>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}