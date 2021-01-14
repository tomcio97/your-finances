import { auth, firestore } from "./firebase"

const collection = firestore.collection('data');

export const FinancesService = {

    getAll: (cb) => collection.where('user_id', '==', auth.currentUser.uid).orderBy('date', 'desc').onSnapshot(cb),
    getIncomes: (cb) => collection.where('user_id', '==', auth.currentUser.uid).where('type', '==', 'Przychód').orderBy('date', 'desc').onSnapshot(cb),
    getOutcomes: (cb) => collection.where('user_id', '==', auth.currentUser.uid).where('type', '==', 'Wydatek').orderBy('date', 'desc').onSnapshot(cb),
    addItem: item => collection.add({...item, user_id: auth.currentUser.uid}),

}