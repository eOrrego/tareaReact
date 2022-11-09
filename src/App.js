import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RutasPublicas from './router/RutasPublicas';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <RutasPublicas />
      </BrowserRouter>
    </div>
  );
}

export default App;
