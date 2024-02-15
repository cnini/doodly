import { fireDB } from "../../firebase"

const addUser = (user) => {
    fireDB.collection('user').add(user)
    .then(() => console.log('Utilisateur ajouté'))
    .catch((err) => console.log(err))
}

const updateUser = (user) => {
    fireDB.collection('user').update(user)
    .then(() => console.log('Utilisateur modifié'))
    .catch((err) => console.log(err))
}

export { addUser, updateUser }