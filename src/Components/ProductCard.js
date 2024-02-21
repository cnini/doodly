import { StyleSheet, Image, View, Text, Pressable } from "react-native"
import { FontAwesome6 } from '@expo/vector-icons'
import { useState } from "react"

export const ProductCard = ({ image }) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <View style={styles.productCard}>
            <Image style={styles.image} source={image.image}/>
            <Text style={styles.name}>{image.name}</Text>
            <Text style={styles.price}>{image.price}€ /sticker</Text>

            <View style={styles.actions}>
                <Pressable onPress={decrementCount} disabled={count === 0}>
                    <FontAwesome6 name="circle-minus" size={24} color={count === 0 ? "lightgray" : "black"} />
                </Pressable>

                <Text>{ count.toString() }</Text>

                <Pressable onPress={incrementCount}>
                    <FontAwesome6 name="circle-plus" size={24} />
                </Pressable>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    productCard: {
        borderRadius: 20,
        width: 160,
        height: 200,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 30,
        alignItems: 'center',
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

    image: {
        width: 60,
        height: 60,
        marginBottom: 5
    },

    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    price: {
        fontSize: 12
    },

    actions: {
        marginTop: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})