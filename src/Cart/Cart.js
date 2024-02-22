import { Text, View, ScrollView, Image } from "react-native"
import { styles } from "./CartStyleSheet"
import { useEffect } from "react"
import { useState } from "react"
import { getAllOrderByUserUid } from "../Repository/OrderRepository"
import { auth } from "../../firebase"
import { OrderCard } from "../Components/OrderCard"

export const Cart = () => {
    const [currentOrders, setCurrentOrders] = useState([])
    const [previousOrders, setPreviousOrders] = useState([])

    useEffect(() => {
        getAllOrderByUserUid(auth.currentUser.uid)
        .then((res) => {
            let getCurrentOrders = []
            let getPreviousOrders = []
            
            res.map(
                (r) => {
                    const order = r.data()

                    if (order.status === "pending") {
                        getCurrentOrders.push(order)
                    } else {
                        getPreviousOrders.push(order)
                    }
                }
            )

            setCurrentOrders(getCurrentOrders)
            setPreviousOrders(getPreviousOrders)
        })
    }, [])

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
                            currentOrders.map(
                                (currentOrder, index) => {
                                    return (
                                        <OrderCard key={index}
                                            orderIndex={index + 1}
                                            orderCard={currentOrder} />
                                    )
                                }
                            )
                        }
                    </View>

                    <Text style={styles.orderCardsTitle}>
                        Commandes passées ({ previousOrders.length })
                    </Text>
                    <View style={styles.orderCardsContainer}>
                        {
                            previousOrders.map(
                                (previousOrder, index) => {
                                    return (
                                        <OrderCard key={index}
                                            orderIndex={index}
                                            orderCard={previousOrder} />
                                    )
                                }
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}