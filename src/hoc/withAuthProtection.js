import { useEffect } from "react";
import { useHistory } from "react-router-dom"
import { auth } from "../service/firebase";

const withAuthProtection = (WrappedComponent, targetLocation) => {
    const AuthProtection = (pros) => {
        const history = useHistory();
        useEffect(() => {
            auth.onAuthStateChanged((user) => {
                if(!user) {
                    history.push(targetLocation)
                }
            })
        }, [history])

        return (
            <WrappedComponent />
        )
    }   

    AuthProtection.displayName = `withAuthProtection(${WrappedComponent.displayName})`;

    return AuthProtection;
}

export default withAuthProtection;