import React from 'react';
import '../styles/Header.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreator from '../actions/actionsCreator'
import { Link } from 'react-router-dom';

export default function Header(){
  const dispatch= useDispatch();
  const mode = useSelector(state => state.theme);



  return (
    <>
    <div className="header-container"> 
      <div className="branding">
        <Link to="/">
          <div>WebStore</div>
          <small>MULTI VENDOR</small>
        </Link>
      </div>

      <div className="mode-switch-container">
        { mode 
          ?
            (<div id="light" onClick={()=>{dispatch(actionCreator.darkMode())}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>)
          :
            (<div id="dark" onClick={()=>{dispatch(actionCreator.lightMode())}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>)
        }
      </div>

      <div className="cart-logo">
        <Link to="/cart">
          <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link>
      </div>
    </div>
    
    </>
  ) 
}