import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route path='/' exact component={Inicio}/>
      </Router>
    </div>
  );
}

export default App;
