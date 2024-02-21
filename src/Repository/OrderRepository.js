import { fireDB } from "../../firebase"

export const addOrder = (order) => {
    fireDB.collection('order').add(order)
    .then(() => console.log('Commande ajoutée'))
    .catch((err) => console.log(err))
}