import { useState } from "react";
import { AlertifyService } from "../service/Alertify";
import { FinancesService } from "../service/Finances";

export const FinanceElement = ({element}) => {


    const [isEdit, setIsEdit] = useState(false);
    const [financeElement, setFinanceElement] = useState({...element});
    const [isChange, setIsChange] = useState(false);

    const {id, amount, description, date, type} = financeElement;
    const convertedDate = new Date(date);

    const onEditClick = () => {
        setIsEdit(!isEdit);
    }

    const onChange = event => {
        const val = { [event.target.name]: event.target.value };
        setFinanceElement({ ...financeElement, ...val });
        setIsChange(true);
    }

    const onSaveClick = () => {

        if(isChange){
        FinancesService.update(id, financeElement)
        .then(() => {
            AlertifyService.success('Edycja sie powiodła');
        })
        .catch((error) => {
            AlertifyService.error(error)
        })
            setIsChange(false);
        }

        setIsEdit(!isEdit);
    }

    const onDeleteClick = () => {
        AlertifyService.confirm('Czy napewno chcesz usunąć ?', () => {
            FinancesService.delete(id)
            .then(() => AlertifyService.success('Usunięto'))
            .catch(error => AlertifyService.error(error)); 
        })
    }

    return (
        <>
        <tr className={type==="Przychód" ? "table-success" : "table-danger"}>
            <td>{convertedDate.getDate() <10 ? 0 : null}{convertedDate.getDate()}. {convertedDate.getMonth() <10 ? 0 : null}{convertedDate.getMonth()+1}. {convertedDate.getFullYear()}</td>
            <td>{type==="Przychód" ? '+' : '-'}
                {isEdit?
                <input value={amount} name="amount" type="text" onChange={onChange} /> : amount} PLN
            </td>
            <td>{type}</td>
            <td>
                {isEdit ? <input value={description} name="description" type="text" onChange={onChange} /> : description? description: '-'}
            </td>
            <td>{isEdit? <button className="btn btn-outline-primary btn-sm" onClick={onSaveClick} >{isChange? 'Zapisz' : 'Cofnij'}</button> : 
            <button className="btn btn-outline-primary btn-sm" onClick={onEditClick} >Edytuj</button> }
                
                <button className="btn btn-outline-secondary btn-sm ml-2" onClick={onDeleteClick} >Usuń</button></td>
        </tr>
        </>
    )
}