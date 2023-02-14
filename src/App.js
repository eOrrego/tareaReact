import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';
import RutasPrivadas from './router/RutasPrivadas';

function App() {

  const isLogged = JSON.parse(localStorage.getItem("userLogged"));

  return (
      <className="App">
        <BrowserRouter>
          {!isLogged ?
            <RutasPublicas />
            :
            <RutasPrivadas />
          }
        </BrowserRouter>
      </>
  );
}

export default App;
