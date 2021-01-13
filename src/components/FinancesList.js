import { useContext, useEffect, useState } from "react"
import { UserContext } from "../providers/UserProvider";
import { FinancesService } from "../service/Finances";
import { FinanceElement } from "./FinanceElement";

export const FinancesList = () => {

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



    return(
        <div className="container">
            <h2>Saldo: {calculateBalance()}</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Data</th>
                    <th scope="col">Kwota</th>
                    <th scope="col">Typ</th>
                </tr>
            </thead>
            <tbody>
            {
                values.map(value => <FinanceElement key={value.id} element={value}/>)
            }
            </tbody>
        </table>
        </div>
    )
}