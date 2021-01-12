import { useContext, useEffect } from "react"
import { UserContext } from "../providers/UserProvider"
import { Nav } from "./Nav"
import  withAuthProtection  from "../hoc/withAuthProtection"

export const Finances = () => {

    const user = useContext(UserContext);

    useEffect(() => {
        console.log(user)
    })

    return (
        <>
        <Nav/>
            Jesteś zalogowany jako {user?.displayName}
            <h1>Finanse</h1>
        </>
    )
}

export const ProdectedFinances = withAuthProtection(Finances, '/')