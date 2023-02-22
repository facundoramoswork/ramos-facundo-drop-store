import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Destacados from './components/Destacados/Destacados';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import ComponenteDeClase from './components/ClassComponent/ComponenteDeClase';
import ComponenteFuncion from './FunctionalComponent/ComponenteFuncion';
import Formulario from './formulario/formulario'; */
import NavBar from './components/NavBar/NavBar';
import NotFound from './NotFound/NotFound';
import ItemDetailComponent from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='*' element= {<NotFound/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
/*     <div className="App">
      <NavBar/>
      <Destacados/>
      <ItemListContainer greeting="como andan?"/>
      <Footer/>
    </div> */
  );
}

export default App;
