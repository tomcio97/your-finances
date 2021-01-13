import  withAuthProtection  from "../hoc/withAuthProtection"
import { FinancesList } from "./FinancesList"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../providers/UserProvider";
import { FinancesService } from "../service/Finances";

export const Finances = () => {

    const [values, setValues] = useState([]);
    const user = useContext(UserContext);

    useEffect(()=> {
        if(user?.uid)
        {
            const eventHandler = FinancesService.getAll((db) => {
                const tmp = [];
                db.forEach(record => tmp.push({
                    ...record.data(),
                    id: record.id
                }));
                setValues(tmp);
            })

            return () => eventHandler();
        }
    }, [user])

    const calculateBalance = () => {
        let incomes = 0;
        let outcomes = 0;
        values.forEach((value) => {
            if(value.type==="Przychód")
                incomes += parseFloat(value.amount);
            else outcomes +=parseFloat(value.amount);    
        })

        return (incomes - outcomes);
    }

    return (
        <div className="container">
            
            <h1 className="mb-5">Twoje finanse</h1>
            <h2 className="mb-2">Saldo: {calculateBalance()}</h2> 
            <FinancesList values={values}/>
        </div>
    )
}

export const ProtectedFinances = withAuthProtection(Finances, '/')