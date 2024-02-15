import { fireDB } from "../../firebase"
import { userModel } from "../Model/User"

export const addUser = (user) => {
    fireDB.collection('user').add(user)
    .then(() => console.log('Utilisateur ajouté'))
    .catch((err) => console.log(err))
}

export const updateUser = (user) => {
    fireDB.collection('user').update(user)
    .then(() => console.log('Utilisateur modifié'))
    .catch((err) => console.log(err))
}

export const getUserByUid = async (uid) => {
    const snapshot = await fireDB.collection('user').where('uid', '==', uid).get()

    if (!snapshot.empty) {
        return snapshot.docs[0].data()
    }
}