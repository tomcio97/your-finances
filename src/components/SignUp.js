import { useState } from "react"
import { useHistory } from "react-router-dom";
import { AlertifyService } from "../service/Alertify";
import { Auth } from "../service/Auth";

export const SignUp = () => {

    const [registerForm, setRegisterForm] = useState({username: '', email: '', password: '', confirmPassword: ''});
    const history = useHistory();

    const {username, email, password, confirmPassword} = registerForm;

    const onChange = event => {
        const val = {[event.target.name]: event.target.value }
        setRegisterForm({...registerForm, ...val})
    }

    const isInvalid =
        password !== confirmPassword ||
        password === '' ||
        email === '' ||
        username === '';

    const onSubmit = event => {
        event.preventDefault();
        Auth.register(email, password)
        .then((result) => {result.user.updateProfile({
            displayName: username
        });
        AlertifyService.success('Zostałeś zarejestrowany');
        history.push('/finanse');   
    })
        .catch(error => {
            AlertifyService.error(error.message);
        })
    }
    
    return (
        <>
        <div className="container div-lower">
        <div className="row justify-content-around">
        <div className="col-4 align-self-center">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input className="form-control mt-2" name="username" value={username} onChange={onChange} type="text" placeholder="Wprowadz nazwę użytkownika" />
                <input className="form-control mt-2" name="email" type="text" value={email} onChange={onChange} placeholder="Wprowadz email"/>
                <input className="form-control mt-2" type="password"  value={password} onChange={onChange} name="password" placeholder="Wprowadz hasło" />
                <input className="form-control mt-2" type="password"  value={confirmPassword} onChange={onChange} name="confirmPassword" placeholder="Potwierdź hasło" />
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary ml-1">Zarejestruj się</button>
            </form>

            </div>
            </div>
            </div>
        </>
    )
}