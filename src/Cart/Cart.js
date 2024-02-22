import { Text, View, ScrollView, Image } from "react-native"
import { styles } from "./CartStyleSheet"
import { useEffect } from "react"
import { useState } from "react"
import { getAllOrderByUserUid } from "../Repository/OrderRepository"
import { auth } from "../../firebase"
import { OrderCard } from "../Components/OrderCard"
import { useSelector } from "react-redux"

export const Cart = () => {
    const currentUser = useSelector(state => state.currentUser)
    const orders = useSelector(state => state.order)

    const [currentOrders, setCurrentOrders] = useState([])
    const [previousOrders, setPreviousOrders] = useState([])

    useEffect(() => {
        if (currentUser !== undefined) {
            let getCurrentOrders = []
            let getPreviousOrders = []
            
            orders.forEach(
                (order) => {
                    if (order.status === "pending") {
                        getCurrentOrders.push(order)
                    } else {
                        getPreviousOrders.push(order)
                    }
                }
            )

            setCurrentOrders(getCurrentOrders)
            setPreviousOrders(getPreviousOrders)
        }
    }, [currentUser, orders])

    return (
        <View style={styles.cartContainer}>
            <Image style={styles.backgroundImage} source={require("../../assets/login.png")}/>
            <ScrollView>
                <View style={{ paddingHorizontal: 15, paddingBottom: 80, marginTop: 100 }}>
                    <Text style={styles.orderCardsTitle}>
                        Commandes en cours ({ currentOrders.length })
                    </Text>
                    <View style={styles.orderCardsContainer}>
                        {
                            currentOrders.length > 0 ? (
                                currentOrders.map(
                                    (currentOrder, index) => {
                                        return (
                                            <OrderCard key={index}
                                                orderCard={currentOrder} />
                                        )
                                    }
                                )
                            ) : (<Text>Pas de commande</Text>)
                        }
                    </View>

                    <Text style={styles.orderCardsTitle}>
                        Commandes passées ({ previousOrders.length })
                    </Text>
                    <View style={styles.orderCardsContainer}>
                        {
                            previousOrders.length > 0 ? (
                                previousOrders.map(
                                    (previousOrder, index) => {
                                        return (
                                            <OrderCard key={index}
                                                orderCard={previousOrder} />
                                        )
                                    }
                                )
                            ) :  (<Text>Pas de commande</Text>)
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}