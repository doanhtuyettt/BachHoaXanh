import React, {Component} from 'react';
import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
import SignUpContainer from './pages/Signup/signupcontainer';
import CartContainer from "./pages/Cart/cartcontainer";
import ItemContainer from './pages/Item/Itemcontainer';
import ContextProvider from './pages/Context/ContextProvider';
import Invoice from './pages/Invoice/invoice';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import {getDatabase} from "firebase/database"

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDDccoeFBn-zu0pK4-uc-wHIezs7NidCC0",
  authDomain: "bachhoaxanh-b01c6.firebaseapp.com",
  projectId: "bachhoaxanh-b01c6",
  storageBucket: "bachhoaxanh-b01c6.appspot.com",
  messagingSenderId: "819198418674",
  appId: "1:819198418674:web:f8ed198ff6b09dd5dfba6b",
  measurementId: "G-D01S1TD08E"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase(app)


class App extends Component {
  render() {
      return (
        <>
        <ContextProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<MainContainer />}/>
                <Route path="/login" element={<LoginContainer auth = {auth}/>}/>
                <Route path="/pay" element={<Invoice />}/>
                <Route path="/signup" element={<SignUpContainer auth = {auth}/>}/>
                <Route path="/cart" element={<CartContainer />}/> 
                <Route path="/:id" element={<ItemContainer />} />
              </Routes>
              <NotificationContainer/>
            </Router>
        </ContextProvider>
        </>
      );
  }
}

export default App;
export {auth};
