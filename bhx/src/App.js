import React, {Component} from 'react';
import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
import SignInContainer from './pages/Signin/signincontainer';
import CartContainer from "./pages/Cart/cartcontainer";
// import ItemContents from './pages/Item/template/Itemcontents';
import ContextProvider from './pages/Context/ContextProvider';
import Invoice from './pages/Invoice/invoice';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDccoeFBn-zu0pK4-uc-wHIezs7NidCC0",
  authDomain: "bachhoaxanh-b01c6.firebaseapp.com",
  projectId: "bachhoaxanh-b01c6",
  storageBucket: "bachhoaxanh-b01c6.appspot.com",
  messagingSenderId: "819198418674",
  appId: "1:819198418674:web:f8ed198ff6b09dd5dfba6b",
  measurementId: "G-D01S1TD08E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 
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
                {/* <Route path="/item/:id" component={ItemContents} />*/}
                <Route path="/signup" element={<SignInContainer auth = {auth}/>}/>
                <Route path="/cart" element={<CartContainer />}/> 
              </Routes>
              <NotificationContainer/>
            </Router>
        </ContextProvider>
        </>
      );
  }
}

export default App;
