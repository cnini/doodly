import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity,} from "react-native"
import { styles } from "./LoginStyleSheet"
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/favicon.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mot de passe"
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
    </View> 
  );
}



/*export const Login = () => {
    return (
        <View style={styles.loginContainer}>
            <Text>Login.js</Text>
        </View>
    )
}*/