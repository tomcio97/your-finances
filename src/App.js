import './App.css';
import { Routing } from './Routing';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './providers/UserProvider';

function App() {

  
  return (
    <div className="App">
      <UserProvider>
        <Routing />
        </UserProvider>
    </div>
  );
}

export default App;
