import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import ShopHomePage from './Pages/ShopHomePage';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import JoinUs from './Pages/JoinUs';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ShopHomePage/>}/>
        <Route path='/new' element={<ShopCategory category="new"/>}/>
        <Route path='/best' element={<ShopCategory category="best"/>}/>
        <Route path='/dress' element={<ShopCategory category="dress"/>}/>
        <Route path='/outer' element={<ShopCategory category="outer"/>}/>
        <Route path='/top' element={<ShopCategory category="top"/>}/>
        <Route path='/acc/bag' element={<ShopCategory category="acc/bag"/>}/>
        <Route path='/shoes' element={<ShopCategory category="shoes"/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/joinus' element={<JoinUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
