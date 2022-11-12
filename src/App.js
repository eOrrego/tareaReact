import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';
import Nav from './componentes/Nav';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav />
      <RutasPublicas />
      </BrowserRouter>
    </div>
  );
}

export default App;
