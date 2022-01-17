import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar2 from './components/navegacion/Navbar2'
import Inicio from './components/paginas/Inicio'
import Ciudades from './components/paginas/Ciudades'
import Ciudad from './components/paginas/Ciudad'
import Review from './components/paginas/Review'
import Usuarios from './components/paginas/Usuarios'
import Footer2 from './components/footer/Footer2'

function App() {
  return (
    
      <BrowserRouter>
      <Navbar2/>
      <Routes>
      <Route path='/inicio' element={<Inicio/>}/> 
      <Route path='/ciudades' element={<Ciudades/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/ciudad' element={<Ciudad/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/> 
      </Routes>
      <Footer2/>
      </BrowserRouter>
    
  );
}

export default App;
