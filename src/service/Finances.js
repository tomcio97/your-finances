import { auth, firestore } from "./firebase"

const collection = firestore.collection('data');

export const FinancesService = {

    getAll: (cb) => collection.where('user_id', '==', auth.currentUser.uid).orderBy('date', 'asc').onSnapshot(cb),
    addItem: item => collection.add({...item, user_id: auth.currentUser.uid}),

}