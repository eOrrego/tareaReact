import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';
import Nav from './componentes/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import RutasPrivadas from './router/RutasPrivadas';


function App() {

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));
  console.log(isLogged);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {!isLogged ?
          <RutasPublicas />
          :
          <RutasPrivadas />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
