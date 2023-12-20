import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import MainRouter from './routes';

function App() {
  return (
    <div>
      <Navbar />
      <MainRouter />
    </div>
  );
}

export default App;
