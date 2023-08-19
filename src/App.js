
import { Checkbox } from '@mui/material';
import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise=loadStripe('pk_test_51NIxJiSA8fZAgDaWykpXHCdyohQywdB4SHtJkSvzaUMmG9dCHNHiTRVsW2mHvruEof225sAR3S5lmaiYDAYy1JZC00xQfHz3pO');

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
      //will only run once when the app component is loaded
    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>",authUser);

      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser,
          })
      }else{
        dispatch({
          type:'SET_USER',
          user:null,
        })
      }
    })

  }, [])
  //BEM
  return (
    <Router>
    <div className="app">
      <Header/>
      <Routes>
      <Route path="/orders" element={<Orders/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/payment" element={
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
      } 
      />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
