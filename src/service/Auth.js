import { auth } from "./firebase";

export const Auth = {

    register: (email, password) => auth.createUserWithEmailAndPassword(email, password),
}