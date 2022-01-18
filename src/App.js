import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import './utils/stylesUtils.css';
import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import MainLayout from './layout/MainLayout';
import ProductDetails  from './containers/ProductDetails';
import ProductSearch from './containers/ProductSearch';
import Cart from './containers/Cart';

function App() {
  const mode = useSelector(state => state.theme);

  useEffect(() =>{
    if(mode)
      document.body.style.backgroundColor = "black";
    else
      document.body.style.backgroundColor = "white";
  },[mode]);

  return (
    <div className={mode ? 'dark-mode' : ''}>
        <Routes>
          <Route path='/' element={<MainLayout />} > 
            <Route index element={<Home />} />
            <Route path="productdetails/:productId" element={<ProductDetails />}/>
            <Route path="productsearch" element={<ProductSearch />}/>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
