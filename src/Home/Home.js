import { Text, View, ScrollView, Pressable } from "react-native"
import { styles } from "./HomeStyleSheet"
import { ProductCard } from "../Components/ProductCard"
import { useState } from "react"
import { auth } from "../../firebase"
import { Order } from "../Model/Order"
import { addOrder } from "../Repository/OrderRepository"

export const Home = ({ navigation }) => {
    const { order, setOrderData } = Order()

    const [products, setProducts] = useState([
        {
            image: require('../../assets/images/blossom.png'),
            name: "Belle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/bulles.png'),
            name: "Bulle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/buttercup.png'),
            name: "Rebelle - Les Supers Nanas",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/lisa-simpson.png'),
            name: "Lisa - Les Simpson",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/rick-sanchez.png'),
            name: "Rick Sanchez - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/morty-smith.png'),
            name: "Morty Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/summer-smith.png'),
            name: "Summer Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/beth-smith.png'),
            name: "Beth Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
        {
            image: require('../../assets/images/jerry-smith.png'),
            name: "Jerry Smith - Rick & Morty",
            price: 0.75,
            quantity: 0
        },
    ])

    const [totalCount, setTotalCount] = useState(0)

    const handleTotalCount = (productIndex, value) => {
        products.map((product, index) => {
            if (index === productIndex) {
                return product.quantity = product.quantity + value
            }
        })

        setProducts(products)
        setTotalCount(previousTotalCount => previousTotalCount + value)
    }

    const handleCreateOrder = () => {
        setOrderData('userUid', auth.currentUser.uid)

        const images = products.filter(product => product.quantity > 0).map((product, index) => {
            return { key: index, quantity: product.quantity, price: (product.quantity * product.price) }
        })

        setOrderData('images', images)
        addOrder(order)

        navigation.navigate('Cart')
    }

    return (
        <View style={styles.homeContainer}>
            <ScrollView>
                <View style={styles.productContainer}>
                    {
                        products.map(
                            (product, index) => {
                                return (
                                    <ProductCard key={index} 
                                        productIndex={index}
                                        product={product} 
                                        handleTotalCount={handleTotalCount} />
                                )
                            }
                        )
                    }
                </View>
            </ScrollView>

            <Pressable style={styles.homeButton} onPress={handleCreateOrder}>
                <Text style={styles.homeButtonText}>Ajouter au panier ({ totalCount })</Text>
            </Pressable>
        </View>
    )
}