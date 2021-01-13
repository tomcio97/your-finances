import { useEffect } from "react"
import  withAuthProtection  from "../hoc/withAuthProtection"
import { FinancesList } from "./FinancesList"


export const Finances = () => {


    return (
        <>
            <h1 className="mb-5">Twoje finanse</h1>
            <FinancesList />
        </>
    )
}

export const ProdectedFinances = withAuthProtection(Finances, '/')