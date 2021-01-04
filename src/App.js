import './App.css';
import { CurrentUser } from './components/CurrentUser';
import { SignIn } from './components/SignIn';
import { UserProvider } from './providers/UserProvider';
import { Routing } from './Routing';

function App() {
  return (
    <div className="App">
        <UserProvider>
          <CurrentUser/>
          <Routing />
      </UserProvider>
    </div>
  );
}

export default App;
