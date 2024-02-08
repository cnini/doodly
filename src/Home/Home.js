import { Text, View } from "react-native"

import { styles } from "./HomeStyleSheet"

export const Home = ({ navigation }) => {
    return (
        <View style={styles.homeContainer}>
            <Text>Home.js</Text>
        </View>
    )
}