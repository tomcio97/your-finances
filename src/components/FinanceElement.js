
export const FinanceElement = ({element}) => {
    const {amount, date, type} = element;
    const convertedDate = new Date(date);


    return (
        <>
        <tr>
            <td>{convertedDate.getDate() <10 ? 0 : null}{convertedDate.getDate()}. {convertedDate.getMonth() <10 ? 0 : null}{convertedDate.getMonth()+1}. {convertedDate.getFullYear()}</td>
            <td>{type==="Przychód" ? '+' : '-'}{amount}</td>
            <td>{type}</td>
        </tr>
        </>
    )
}