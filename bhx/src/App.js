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


class App extends Component {
  render() {
      return (
        <>
        <ContextProvider>
            <Router>
            
              <Routes>
                <Route exact path="/" element={<MainContainer />}/>
                <Route path="/login" element={<LoginContainer />}/>
                <Route path="/pay" element={<Invoice />}/>
                {/* <Route path="/item/:id" component={ItemContents} />*/}
                <Route path="/signin" element={<SignInContainer/>}/>
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
