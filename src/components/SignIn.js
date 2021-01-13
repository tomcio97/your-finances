import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { Auth } from "../service/Auth";

export const SignIn = () => {
    
    const [loginForm, setLoginForm] = useState({email: '', password: ''});
    const [error, setError] = useState(null);
    const history = useHistory();
    const user = useContext(UserContext);

    const {email, password} = loginForm;

    useEffect(() => {
        if(user) history.push('/finanse')
    })
    
    const onChange = event => {
        const val = {[event.target.name]: event.target.value }
        setLoginForm({...loginForm, ...val})
    }

    const isInvalid = email === '' || password === '';

    const onSubmit = event => {
        event.preventDefault(); 
        Auth.login(email, password)
        .then(() => {history.push('/finanse')})
        .catch((error) => {setError(error)})
    }

    return (
    <>
    <div className="container">
        <div className="row justify-content-around">
        <div className="col-4 align-self-center">
    <form onSubmit={onSubmit} className="form-group">
       <input className="form-control mt-2" name="email"  type="text" value={email} onChange={onChange} placeholder="Wprowadz email"/>
       <input className="form-control mt-2" type="password"  value={password} onChange={onChange} name="password" placeholder="Wprowadz hasło" />
       <button type="submit"  className="btn btn-primary mt-1" disabled={isInvalid}>Zaloguj się</button>
    </form> 
    </div>
    </div>
    </div>

    {error && <p>{error.message}</p>}
    </>);
}