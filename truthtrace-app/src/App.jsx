import './App.css';
import Home from './routes/home.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;

