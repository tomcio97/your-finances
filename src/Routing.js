import {BrowserRouter as Router, Route} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { ProdectedFinances } from './components/Finances';
import { AddFinancesForm } from './components/AddFinancesForm';
import { Nav } from './components/Nav';

export const Routing = () => {

    return (
        <Router>
            <Nav />
            <div>
                <Route path={'/register'} exact={true} component={SignUp} />
                <Route path={'/'} exact={true} component={SignIn} />
                <Route path={'/finanse'} exact={true} component={ProdectedFinances} />
                <Route path={'/dodawanie'} exact={true} component={AddFinancesForm} />
            </div>
        </Router>
    )
}