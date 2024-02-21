import { Text, View, ScrollView } from "react-native"
import { styles } from "./HomeStyleSheet"
import { ProductCard } from "../Components/ProductCard"

export const Home = () => {
    const images = [
        {
            image: require('../../assets/images/blossom.png'),
            name: "Belle - Les Supers Nanas",
            price: 0.75
        },
        {
            image: require('../../assets/images/bulles.png'),
            name: "Bulle - Les Supers Nanas",
            price: 0.75
        },
        {
            image: require('../../assets/images/buttercup.png'),
            name: "Rebelle - Les Supers Nanas",
            price: 0.75
        },
        {
            image: require('../../assets/images/lisa-simpson.png'),
            name: "Lisa - Les Simpson",
            price: 0.75
        },
        {
            image: require('../../assets/images/rick-sanchez.png'),
            name: "Rick Sanchez - Rick & Morty",
            price: 0.75
        },
        {
            image: require('../../assets/images/morty-smith.png'),
            name: "Morty Smith - Rick & Morty",
            price: 0.75
        },
        {
            image: require('../../assets/images/summer-smith.png'),
            name: "Summer Smith - Rick & Morty",
            price: 0.75
        },
        {
            image: require('../../assets/images/beth-smith.png'),
            name: "Beth Smith - Rick & Morty",
            price: 0.75
        },
        {
            image: require('../../assets/images/jerry-smith.png'),
            name: "Jerry Smith - Rick & Morty",
            price: 0.75
        },
    ]

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                <View style={styles.productContainer}>
                    {
                        images.map(
                            (image, index) => {
                                return (
                                    <ProductCard key={index} image={image}/>
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}