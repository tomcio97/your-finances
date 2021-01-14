import { useState } from "react"
import { useHistory } from "react-router-dom";
import { FinancesService } from "../service/Finances";
import  withAuthProtection  from "../hoc/withAuthProtection"

export const AddFinancesForm = () => {

    const [financesForm, setFinancesForm] = useState({ amount: '', date: Date.now(), type: '' , description: ''});
    const [error, setError] = useState(null);
    const history = useHistory();

    const { amount, description, type } = financesForm;

    const isInvalid = amount === '' || type === '';

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
        <div className="container div-lower">
            <div className="row justify-content-around">
                <div className="col-4 align-self-center">
                    <form onSubmit={onSubmit} className="form-group">
                        <input
                            className="form-control"
                            name="amount"
                            value={amount}
                            onChange={onChange}
                            type="text"
                            placeholder="Wprowadź kwotę PLN" />
                        <input
                            className="form-control mt-2"
                            name="description"
                            value={description}
                            onChange={onChange}
                            type="text"
                            placeholder="Opis" />
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="type" value="Przychód" onChange={onChange} />
                            <label className="form-check-label">Przychód</label>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="type" value="Wydatek" onChange={onChange} />
                            <label className="form-check-label">Wydatek</label>
                        </div>
                        <button className="btn btn-primary mt-3" disabled={isInvalid} type="submit">
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

export const ProtectedAddFinancesForm = withAuthProtection(AddFinancesForm, '/')