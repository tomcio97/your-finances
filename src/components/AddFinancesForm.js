import { useState } from "react"
import { useHistory } from "react-router-dom";
import { FinancesService } from "../service/Finances";

export const AddFinancesForm = () => {

    const [financesForm, setFinancesForm] = useState({amount: '', date: new Date(), type: ''});
    const [error, setError] = useState(null);
    const history = useHistory();

    const {amount} = financesForm;

    const onChange = event => {
        const val = {[event.target.name]: event.target.value }
        setFinancesForm({...financesForm, ...val})
    }

    const onSubmit = event => {
        event.preventDefault();

        console.log(financesForm);
        FinancesService.addItem({...financesForm})
        .then(()=> {
            setError(null);
            history.push('/finanse');
        })
        .catch(error => {
            setError(error);
        });
    }
    
    return (<>
        <form onSubmit={onSubmit}>
        <input
                name="amount"
                value={amount}
                onChange={onChange}
                type="text"
                placeholder="Dodaj przychód" />
                <label>Przychód</label>
                <input type="radio" name="type" value="income" onChange={onChange}/>
                <label>Wydatek</label>
                <input type="radio" name="type" value="outcome" onChange={onChange}/>      
         <button type="submit">
                Zapisz
            </button>
        </form>

        {error && <p>{error.message}</p>}
    </>
    )
}