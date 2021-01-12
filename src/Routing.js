import {BrowserRouter as Router, Route} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { ProdectedFinances } from './components/Finances';

export const Routing = () => {

    return (
        <Router>
            <div>
                <Route path={'/register'} exact={true} component={SignUp} />
                <Route path={'/'} exact={true} component={SignIn} />
                <Route path={'/finanse'} exact={true} component={ProdectedFinances} />
            </div>
        </Router>
    )
}