import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity,} from "react-native"
import { styles } from "./LoginStyleSheet"
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
        <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>
      <Image style={styles.image} source={require("../../assets/doodly2.png")} /> 
      <StatusBar style="auto" />
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
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Mot de passe oublié ?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>SE CONNECTER</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.signUp}>
        <Text>Pas encore de compte ? </Text><Text style={styles.signUpText}>S'inscrire</Text>  
      </TouchableOpacity> 
    </View> 
  );
}



