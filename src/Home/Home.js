import { Text, View, ScrollView, Pressable, Image } from "react-native"
import { styles } from "./HomeStyleSheet"
import { ProductCard } from "../Components/ProductCard"
import { useState } from "react"
import { auth } from "../../firebase"
import { Order } from "../Model/Order"
import { addOrder, getLastOrderNumber } from "../Repository/OrderRepository"

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

    const handleCreateOrder = async () => {
        try {
            setOrderData('userUid', auth.currentUser.uid);
    
            const lastOrderNumber = await getLastOrderNumber(auth.currentUser.uid)
            
            const newOrderNumber = '000' + (parseInt(lastOrderNumber, 10) + 1).toString();
    
            setOrderData('number', newOrderNumber)
    
            const images = products.filter(product => product.quantity > 0).map((product, index) => {
                return { key: index, quantity: product.quantity, price: (product.quantity * product.price) }
            })
    
            setOrderData('images', images)
    
            addOrder(order)
    
            navigation.navigate('Cart')
        } catch (error) {
            console.error("Erreur lors de la création de la commande :", error)
        }
    }

    return (
        <View style={styles.homeContainer}>
            <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>
            <Text style={styles.homeTitle}>Choisis les stickers de ton choix</Text>
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