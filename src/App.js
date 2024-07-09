import './App.css';
import Miniheader from './components/Miniheader/Miniheader';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Miniheader/>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/cart'  element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        
       
      </Routes>
      <Join/>
      <Footer/>

      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
