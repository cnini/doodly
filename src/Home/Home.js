import { Text, View, ScrollView, Pressable, Image } from "react-native"
import { styles } from "./HomeStyleSheet"
import { ProductCard } from "../Components/ProductCard"
import { useState } from "react"
import { auth } from "../../firebase"
import { Order } from "../Model/Order"
import { addOrder, getLastOrderNumber } from "../Repository/OrderRepository"
import { useDispatch, useSelector } from "react-redux"
import { updateQuantity } from "../Slices/ProductSlice"

export const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product)

    const { order, setOrderData } = Order()

    const [totalCount, setTotalCount] = useState(0)

    const handleTotalCount = (productIndex, value) => {
        dispatch(updateQuantity({ productIndex: productIndex, newQuantity: value }))
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