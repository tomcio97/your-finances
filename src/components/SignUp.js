import { useState } from "react"
import { useHistory } from "react-router-dom";
import { Auth } from "../service/Auth";

export const SignUp = () => {

    const [registerForm, setRegisterForm] = useState({username: '', email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState(null);
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
        history.push('/finanse');   
    })
        .catch(error => setError(error))
    }
    
    return (
        <>
        <div class="container">
        <div class="row justify-content-around">
        <div class="col-4 align-self-center">
            <form onSubmit={onSubmit}>
                <div class="form-group">
                <input className="form-control mt-2" name="username" value={username} onChange={onChange} type="text" placeholder="Wprowadz nazwę użytkownika" />
                <input className="form-control mt-2" name="email" type="text" value={email} onChange={onChange} placeholder="Wprowadz email"/>
                <input className="form-control mt-2" type="password"  value={password} onChange={onChange} name="password" placeholder="Wprowadz hasło" />
                <input className="form-control mt-2" type="password"  value={confirmPassword} onChange={onChange} name="confirmPassword" placeholder="Potwierdź hasło" />
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary ml-1">Zarejestruj się</button>
            </form>

            {error && <p>{error.message}</p>}
            </div>
            </div>
            </div>
        </>
    )
}