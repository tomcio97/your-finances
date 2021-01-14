import './App.css';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
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
