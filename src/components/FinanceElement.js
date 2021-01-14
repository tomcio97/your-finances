
export const FinanceElement = ({element}) => {
    const {amount, date, type, description} = element;
    const convertedDate = new Date(date);


    return (
        <>
        <tr className={type==="Przychód" ? "table-success" : "table-danger"}>
            <td>{convertedDate.getDate() <10 ? 0 : null}{convertedDate.getDate()}. {convertedDate.getMonth() <10 ? 0 : null}{convertedDate.getMonth()+1}. {convertedDate.getFullYear()}</td>
            <td>{type==="Przychód" ? '+' : '-'}{amount} PLN</td>
            <td>{type}</td>
            <td>{description? description: '-'}</td>
        </tr>
        </>
    )
}