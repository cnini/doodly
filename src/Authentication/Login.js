import { Text, View, Image, TextInput, Pressable,} from "react-native"
import { styles } from "./LoginStyleSheet"
import { Link } from '@react-navigation/native'
import { useState } from "react"
import { auth } from "../../firebase"
import { getUserByUid } from "../Repository/UserRepository"

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    if (email !== "" && password !== "") {
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("Utilisateur connecté")

            getUserByUid(auth.currentUser.uid)
            .then((res) => {
                console.log('Utilisateur trouvé : ' + res.email)
            })

            navigation.navigate('Profile')
        })
        .catch((e) => console.log(e))
    }
}

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>
      <Image style={styles.image} source={require("../../assets/doodly2.png")} /> 
      <View style={styles.inputView}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>
      <View style={styles.inputView}>
      <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <Pressable style={styles.loginBtn} onPress={handleSignin}>
        <Text style={styles.loginText}>SE CONNECTER</Text> 
      </Pressable>

      <View style={styles.linkZone}>
          <Text>Vous n'avez pas de compte ?</Text>
          <Link style={styles.link} to={{ screen: 'Registry' }}>Inscrivez-vous !</Link>
      </View>
    </View> 
  );
}
