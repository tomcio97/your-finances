import { useContext } from "react"
import { Link} from "react-router-dom";
import { UserContext } from "../providers/UserProvider"
import { auth } from "../service/firebase"

export const Nav = () => {

  const user = useContext(UserContext);

  return (
    <>
    {user ? 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/finanse" className="nav-item nav-link">Finanse</Link>
             <Link to="/przychody" className="nav-item nav-link">Przychody</Link>
            <Link to="/wydatki" className="nav-item nav-link" >Wydatki</Link>
            <Link to="/dodawanie" className="nav-item nav-link" >Dodaj</Link>
            <a href="/#" className="nav-item nav-link" onClick={() => auth.signOut()}>Wyloguj</a>
            {user.displayName}
          </div>
        </div>
      </nav>
       : null}
    </>
  )
}