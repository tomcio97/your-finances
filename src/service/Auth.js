import { auth } from "./firebase";

export const Auth = {

    register: (email, password) => auth.createUserWithEmailAndPassword(email, password),
    login: (email, password) => auth.signInWithEmailAndPassword(email, password),
    signOut: () => auth.signOut(),
    onAuthChanged: (cb) => auth.onAuthStateChanged(cb)
}