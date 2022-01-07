import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/Inicio'
import Ciudades from './components/paginas/Ciudades'
import Ciudad from './components/paginas/Ciudad'
import Review from './components/paginas/Review'
import Usuarios from './components/paginas/Usuarios'
import Footer from './components/footer/Footer'

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/inicio' element={<Inicio/>}/> 
      <Route path='/ciudades' element={<Ciudades/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/ciudad' element={<Ciudad/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
