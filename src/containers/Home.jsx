import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreator  from '../actions/actionsCreator';
import '../styles/Home.css';

import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Showcasegrids from '../components/Showcasegrids';
import Showcaserow from '../components/Showcaserow';

export default function  Home (){
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    console.log('dispatch called from home');
    dispatch(actionCreator.getAsyncProducts(4))
  },[]);

  return (
    <div className="home-container">
      <Categories />
      <div>
        <Banner />
        <div className="home-showcases" style={{display: "flex", flexWrap: "wrap"}}>
          <Showcasegrids data={products} title="Men's Selection" limit={4} />
          <Showcasegrids data={products} title="Women's Selection" limit={4} />
          <Showcasegrids data={products} title="50% Off on shoes" limit={4} />
          <Showcasegrids data={products} title="Winters collection" limit={4} />
          <Showcaserow   data={products} title="Books of best selling authors" limit={10}/>
        </div>
      </div>
    </div>
  )
}