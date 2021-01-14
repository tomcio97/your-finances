import { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider"
import { auth } from "../service/firebase"

export const Nav = () => {

  const user = useContext(UserContext);


  return (
    <>
      {user ?
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-5">
              <li className="nav-item">
                <Link to="/finanse" className="nav-item nav-link">Historia</Link>
              </li>
              <li className="nav-item">
                <Link to="/przychody" className="nav-item nav-link">Przychody</Link>
              </li>
              <li className="nav-item">
                <Link to="/wydatki" className="nav-item nav-link" >Wydatki</Link>
              </li>
              <li className="nav-item">
                <Link to="/dodawanie" className="nav-item nav-link" >Dodaj</Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              <span className="text-muted mr-3">Witaj {user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}</span>
              <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" onClick={() => auth.signOut()} >Wyloguj</button>
            </div>
          </div>
        </nav>
        : null}
    </>
  )
}