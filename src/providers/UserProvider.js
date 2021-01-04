import { useEffect, useState, createContext } from "react"
import { Auth } from "../service/Auth";
import PropTypes from "prop-types";

export const UserContext = createContext({user: null})

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        Auth.onAuthChanged((u) => {
            u ? setUser(u) : setUser(null)
        })
    }, []);

    return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider> 
    )
    
}

UserProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}