import { useState } from "react";

const userModel = () => {
    return {
        uid: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        zipcode: '',
        city: '',
    }
}

export const User = () => {
    const [user, setUser] = useState(userModel)

    const setUserData = (key, value) => {
        setUser(u => ({...u, [key]: value}))
    }

    return { user, setUserData }
}