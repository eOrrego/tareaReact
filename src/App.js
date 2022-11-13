import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';
import RutasPrivadas from './router/RutasPrivadas';
import NavBar from './componentes/NavBar';


function App() {

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
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
