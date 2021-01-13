import { useState } from "react"
import { useHistory } from "react-router-dom";
import { FinancesService } from "../service/Finances";

export const AddFinancesForm = () => {

    const [financesForm, setFinancesForm] = useState({ amount: '', date: Date.now(), type: '' });
    const [error, setError] = useState(null);
    const history = useHistory();

    const { amount } = financesForm;

    const onChange = event => {
        const val = { [event.target.name]: event.target.value }
        setFinancesForm({ ...financesForm, ...val })
    }


    const onSubmit = event => {
        event.preventDefault();


        financesForm.amount = financesForm.amount.replace(',','.');
        FinancesService.addItem({ ...financesForm })
            .then(() => {
                setError(null);
                history.push('/finanse');
            })
            .catch(error => {
                setError(error);
            });
    }

    return (<>
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-4 align-self-center">
                    <form onSubmit={onSubmit} className="form-group">
                        <input
                            className="form-control"
                            name="amount"
                            value={amount}
                            onChange={onChange}
                            type="text"
                            placeholder="Wprowadź kwotę" />
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="type" value="Przychód" onChange={onChange} />
                            <label className="form-check-label">Przychód</label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="type" value="Wydatek" onChange={onChange} />
                            <label className="form-check-label">Wydatek</label>
                        </div>
                        <button className="btn btn-primary mt-1" type="submit">
                            Zapisz
                        </button>
                    </form>
                </div>
            </div>
        </div>
        {error && <p>{error.message}</p>}
    </>
    )
}