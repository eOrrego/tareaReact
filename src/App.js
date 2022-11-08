import { Button } from 'react-bootstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';

function App() {
  return (
    <div className="App">
      <h1>HOLA MUNDO!</h1>
      <Button variant="primary">Primary</Button>
      <BrowserRouter> 
      <RutasPublicas />
      </BrowserRouter>
    </div>
  );
}

export default App;
