import { fireDB } from "../../firebase"

export const addOrder = (order) => {
    fireDB.collection('order').add(order)
    .then(() => console.log('Commande ajoutée'))
    .catch((err) => console.log(err))
}

export const updateOrder = async (order) => {
    const snapshot = await fireDB.collection('order')
        .where('number', '==', order.number)
        .limit(1)
        .get()

    if (!snapshot.empty) {
        const orderId = snapshot.docs[0].id
        await fireDB.collection('order').doc(orderId).update(order)
        console.log('Commande modifiée')
    } else {
        console.log('Aucune commande trouvée avec ce numéro')
    }
}

export const getLastOrderNumber = async (userUid) => {
    const snapshot = await fireDB.collection('order')
        .where('userUid', '==', userUid)
        .orderBy('number', 'desc')
        .limit(1)
        .get()

    if (!snapshot.empty) {
        return snapshot.docs[0].data().number
    }
}

export const getAllOrderByUserUid = async (userUid) => {
    const snapshot = await fireDB.collection('order').where('userUid', '==', userUid).get()

    if (!snapshot.empty) {
        return snapshot.docs
    }
}