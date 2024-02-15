import { Text, View, TextInput, Button } from "react-native"
import { styles } from "./RegistryStyleSheet"
import { User } from "../Model/User"
import { auth } from "../../firebase"
import { useState } from "react"
import { addUser } from "../Repository/UserRepository"

export const Registry = () => {
    const { user, setUserData } = User()

    const handleRegistration = async () => {
        const uid = await auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => res.user.uid)
        .catch((e) => console.log(e))

        user.uid = uid

        addUser(user)
    }

    return (
        <View style={styles.registryContainer}>
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

            <Button title="S'inscrire" onPress={handleRegistration}/>
        </View>
    )
}