import { StyleSheet, Image, View, Text, Pressable } from "react-native"
import { updateOrder } from "../Repository/OrderRepository"
import { useDispatch, useSelector } from "react-redux"
import { updateStoredOrder } from "../Slices/OrderSlice"

export const OrderCard = ({ orderCard }) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product)

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
                const name = products.filter(p => p.id === image.id)[0].name

                return (
                    <Text key={image.id}>
                        {image.quantity} x Sticker "{name}"
                    </Text>
                )
            }
        )
    }

    const handleUpdateOrder = () => {
        const updatedOrder = {
            userUid: orderCard.userUid,
            images: orderCard.images,
            number: orderCard.number,
            status: 'completed'
        }

        updateOrder(updatedOrder)
        dispatch(updateStoredOrder(updatedOrder))
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
        height: 'auto',
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
        marginTop: 10,
    },

    orderCardButtonText: {
        color: '#FFF',
        textAlign: 'center'
    },
})