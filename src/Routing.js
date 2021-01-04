import {BrowserRouter as Router, Route} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';

export const Routing = () => {

    return (
        <Router>
            <div>
                <Route path={'/register'} exact={true} component={SignUp} />
                <Route path={'/'} exact={true} component={SignIn} />
            </div>
        </Router>
    )
}