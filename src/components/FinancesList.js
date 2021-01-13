import { FinanceElement } from "./FinanceElement";

export const FinancesList = ({values}) => {

     return(
        <>
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
        </>
    )
}