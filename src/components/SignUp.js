import { useState } from "react"
import { Auth } from "../service/Auth";

export const SignUp = () => {

    const [registerForm, setRegisterForm] = useState({username: '', email: '', password: ''});

    const {username, email, password} = registerForm;
    
    const onChange = event => {
        const val = {[event.target.name]: event.target.value }
        setRegisterForm({...registerForm, ...val})
    }

    const onSubmit = event => {
        Auth.register(email, password);
    }
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="username" value={username} onChange={onChange} type="text" placeholder="Wprowadz nazwę użytkownika" />
                <input name="email" type="text" value={email} onChange={onChange} placeholder="Wprowadz email"/>
                <input type="password"  value={password} onChange={onChange} name="password" placeholder="Wprowadz hasło" />
                <button type="submit">Zarejestruj się</button>
            </form>
        </>
    )
}