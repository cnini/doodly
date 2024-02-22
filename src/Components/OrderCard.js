import { StyleSheet, Image, View, Text, Pressable } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from "react"
import { Order } from "../Model/Order"
import { updateOrder } from "../Repository/OrderRepository"

export const OrderCard = ({ orderCard }) => {
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

    const { order, setOrderData } = Order()

    const showTotalPrice = () => {
        let total = 0

        orderCard.images.map(
            (image) => {
                return total += image.price
            }
        )

        return (
            <Text style={{ marginTop: 10 }}>Prix total : {total.toString().replace('.', ',')} €</Text>
        )
    }

    const showDetail = () => {
        return orderCard.images.map(
            (image) => {
                return (
                    <Text key={image.key}>
                        {image.quantity} x Sticker "{products[image.key].name}"
                    </Text>
                )
            }
        )
    }

    const handleUpdateOrder = () => {
        setOrderData('number', orderCard.number)
        setOrderData('userUid', orderCard.userUid)
        setOrderData('images', orderCard.images)
        setOrderData('status', 'completed')

        console.log(order)

        updateOrder(order)
    }

    return (
        <View style={styles.orderCard}>
            <Text style={styles.orderCardTitle}>Commande #{orderCard.number}</Text>

            {showDetail()}
            {showTotalPrice()}

            <Pressable 
                onPress={handleUpdateOrder} 
                style={orderCard.status === 'completed' ? {display: 'none'} : styles.orderCardButton}>
                <Text style={styles.orderCardButtonText}>Payer</Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    orderCard: {
        borderRadius: 20,
        width: 300,
        height: 200,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 30,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.5,
        elevation: 2,
    },

    orderCardTitle: {
        textTransform: 'uppercase',
        marginBottom: 10,
        fontWeight: 'bold'
    },

    orderCardButton: {
        backgroundColor: '#000',
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 'auto',
    },

    orderCardButtonText: {
        color: '#FFF',
        textAlign: 'center'
    },
})