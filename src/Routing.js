import {BrowserRouter as Router, Route} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { ProtectedFinances } from './components/Finances';
import { ProtectedAddFinancesForm } from './components/AddFinancesForm';
import { Nav } from './components/Nav';

export const Routing = () => {

    return (
        <Router>
            <Nav />
            <div>
                <Route path={'/register'} exact={true} component={SignUp} />
                <Route path={'/'} exact={true} component={SignIn} />
                <Route path={'/finanse'} exact={true} component={ProtectedFinances} />
                <Route path={'/dodawanie'} exact={true} component={ProtectedAddFinancesForm} />
            </div>
        </Router>
    )
}