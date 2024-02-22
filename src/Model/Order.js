import { useState } from "react";

export const orderModel = () => {
    return {
        number: '',
        images: [],
        userUid: '',
        status: 'pending',
    }
}

export const Order = () => {
    const [order, setOrder] = useState(orderModel)

    const setOrderData = (key, value) => {
        setOrder(o => ({...o, [key]: value}))
    }

    return { order, setOrderData }
}