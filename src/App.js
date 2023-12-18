
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Register from './components/Pages/Register';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png';
import women_banner from './components/Assests/banner_women.png';
import kid_banner from './components/Assests/banner_kids.png';
import Login from './components/Pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop></Shop>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"></ShopCategory>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/> 
          </Route>
          
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/register' element={<Register></Register>}/>
          <Route path='/login' element={<Login></Login>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
