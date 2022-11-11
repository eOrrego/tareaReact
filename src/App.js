import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';
import Nav from './componentes/Nav';

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
