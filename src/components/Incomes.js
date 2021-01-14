import { useContext, useEffect, useState } from "react"
import { UserContext } from "../providers/UserProvider";
import { FinancesService } from "../service/Finances";
import { FinancesList } from "./FinancesList";
import  withAuthProtection  from "../hoc/withAuthProtection"

export const Incomes = () => {

    const [values, setValues] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        if(user?.uid)
        {
            const eventHandler = FinancesService.getIncomes((db) => {
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

    const calculateSum = () => {
        let result = 0;
        values.forEach((value) => {
            result += parseFloat(value.amount);
        })
        
        return result.toFixed(2);
    }

    return (
        <div className="container"> 
            
            <h1 className="mb-5">Przychody</h1>
            <h2 className="mb-2">Suma: {calculateSum()} PLN</h2>
            <FinancesList values={values}/>
        </div>
    )
}

export const ProtectedIncomes = withAuthProtection(Incomes, '/')