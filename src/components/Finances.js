import { useContext, useEffect } from "react"
import { UserContext } from "../providers/UserProvider"
import { Nav } from "./Nav"
import  withAuthProtection  from "../hoc/withAuthProtection"
import { AddFinancesForm } from "./AddFinancesForm"

export const Finances = () => {

    const user = useContext(UserContext);

    useEffect(() => {
    })

    return (
        <>
        <Nav/>
            Jesteś zalogowany jako {user?.displayName}
            <h1>Finanse</h1>

            <AddFinancesForm/>
        </>
    )
}

export const ProdectedFinances = withAuthProtection(Finances, '/')