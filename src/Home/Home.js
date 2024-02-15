import { Text, View, Image } from "react-native"
import { styles } from "./HomeStyleSheet"
import { useEffect, useState } from "react"

export const Home = () => {
    // const [products, setProducts] = useState([
    //     { id: 1, name: "Supers Nanas - Belle", filename: "blossom.png", quantity: 80 },
    //     { id: 2, name: "Supers Nanas - Bulle", filename: "bulles.png", quantity: 80 },
    //     { id: 3, name: "Simpsons - Lisa Simpson", filename: "lisa-simpson.png", quantity: 80 },
    //     { id: 4, name: "Melody", filename: "melody.png", quantity: 80 },
    //     { id: 5, name: "Supers Nanas - Rebelle", filename: "powerfull-girls.png", quantity: 80 },
    //     { id: 6, name: "Rick & Morty - Rick Sanchez", filename: "rick-sanchez.png", quantity: 80 },
    //     { id: 7, name: "South Park - Stan Marsh", filename: "stan-marsh.png", quantity: 80 },
    //     { id: 8, name: "DC Comics - Wonder Woman", filename: "wonder-woman.png", quantity: 80 },
    // ])

    return (
        <View style={styles.homeContainer}>
            <Text>Home.js</Text>

            {/* { products.map((p) => {
                const imageSource = require('../assets/images/' + p.filename)

                return (
                    <Image key={p.id} style={styles.image} source={imageSource} />
                )
            }) } */}
        </View>
    )
}