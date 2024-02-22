import { fireDB } from "../../firebase"

// export const getAllProducts = async () => {
//     const snapshot = await fireDB.collection('product').get()

//     if (!snapshot.empty) {
//         return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
//     }
// }