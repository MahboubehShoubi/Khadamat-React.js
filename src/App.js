import './App.css';

import { Route , Routes , Navigate } from 'react-router-dom';

//components
import Main from './components/Main';
import Contact from "./components/Contact";
import About from "./components/About";
import Store from './components/Store';
import ProductDetail from "./components/ProductDetail";
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
import Works from "./components/Works";
import Service1 from "./components/Service1";

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';




function App() {
  return (
    <>

      <ProductContextProvider>
            <CartContextProvider>
                <Routes>
                    <Route path='/main' element={<Main />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/*' element={<Navigate to='/main' />} />
                    <Route path='/cart' element={<ShopCart />} />
                    <Route path='/products' element={<Store />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/project' element={<Works />} />
                    <Route path="/services/service-01" element={<Service1/>} />
                </Routes>
            </CartContextProvider>
        </ProductContextProvider>

    </>
  );
}

export default App;
