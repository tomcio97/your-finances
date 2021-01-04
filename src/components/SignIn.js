import { useState } from "react";
import { Auth } from "../service/Auth";

export const SignIn = () => {
    
    const [loginForm, setLoginForm] = useState({email: '', password: ''});

    const {email, password} = loginForm;
    
    const onChange = event => {
        const val = {[event.target.name]: event.target.value }
        setLoginForm({...loginForm, ...val})
    }

    const onSubmit = event => {
        event.preventDefault();
        Auth.login(email, password)
        .then(() => {console.log('Zalogowano')})
        .catch(() => {console.log('Chuj ci w dupe')})
    }

    return (
    <>
    <form onSubmit={onSubmit}>
       <input name="email" type="text" value={email} onChange={onChange} placeholder="Wprowadz email"/>
       <input type="password"  value={password} onChange={onChange} name="password" placeholder="Wprowadz hasło" />
       <button type="submit">Zaloguj się</button>
    </form> 
    </>)
    ;
}