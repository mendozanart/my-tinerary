import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Navbar2 from './components/navegacion/Navbar2'
import Inicio from './components/paginas/Inicio'
import Ciudades from './components/paginas/Ciudades'
import Ciudad from './components/paginas/Ciudad'
import Review from './components/paginas/Review'
import Usuarios from './components/paginas/Usuarios'
import Footer2 from './components/footer/Footer2'
import axios from 'axios'



function App() {
  const [{cities, itineraries}, dispatch] = useStateValue ()
  console.log(itineraries);

  useEffect(() => {

    axios.get("http://localhost:4000/api/datos")
    .then(response=>
      dispatch ({
        type: actionTypes.CITIESDB,
        cities : response.data.response.cities
      }));

      axios.get("http://localhost:4000/api/itinerarios")
      .then(response=>
        dispatch ({
          type: actionTypes.ITINERARIESDB,
          itineraries : response.data.response.itineraries
        }));

      },[]);



  console.log(cities);




  return (
    
      <BrowserRouter>
      <Navbar2/>
      <Routes>
      <Route path='*' element={<Inicio/>}/> 
      <Route path='/ciudades' element={<Ciudades/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/ciudad/:id' element={<Ciudad/>}/>
      <Route path='/usuarios' element={<Usuarios/>}/> 
      </Routes>
      <Footer2/>
      </BrowserRouter>
    
  );
}

export default App;
