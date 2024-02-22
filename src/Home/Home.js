import { Text, View, ScrollView, Pressable, Image } from "react-native"
import { styles } from "./HomeStyleSheet"
import { ProductCard } from "../Components/ProductCard"
import { useState } from "react"
import { Order } from "../Model/Order"
import { addOrder, getLastOrderNumber } from "../Repository/OrderRepository"
import { useDispatch, useSelector } from "react-redux"
import { updateQuantity } from "../Slices/ProductSlice"
import { storeOrder } from "../Slices/OrderSlice"

export const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.currentUser)
    const products = useSelector((state) => state.product)
    const orders = useSelector((state) => state.order)

    const { order } = Order()

    const [totalCount, setTotalCount] = useState(0)

    const handleTotalCount = (productIndex, value) => {
        dispatch(updateQuantity({ productIndex: productIndex, newQuantity: value }))
        setTotalCount(previousTotalCount => previousTotalCount + value)
    }

    const handleCreateOrder = async () => {
        try {
            const newOrder = { ...order }

            newOrder.userUid = currentUser.uid

            const lastOrderNumber = await getLastOrderNumber(currentUser.uid)
            const newOrderNumber = lastOrderNumber 
                ? (parseInt(lastOrderNumber, 10) + 1).toString().padStart(3, '0')
                : '0001'

            newOrder.number = newOrderNumber

            products
            .filter(p => parseInt(p.quantity, 10) > 0)
            .map(
                product => {
                    newOrder.images.push({ 
                        id: product.id, 
                        quantity: product.quantity, 
                        price: (product.quantity * product.price) 
                    })
                }
            )

            addOrder(newOrder)
            dispatch(storeOrder(newOrder))
    
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