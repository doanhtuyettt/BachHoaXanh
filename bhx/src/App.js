import React, {Component} from 'react';

import MainContainer from "./pages/Main/maincontainer";
import LoginContainer from "./pages/Login/logincontainer";
// import SigninContainer from "./pages/Signin/signincontainer";
// import CartContainer from "./pages/Cart/cartcontainer";
// import ItemContents from './pages/Item/template/Itemcontents';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


class App extends Component {
  render() {
      return (
          <>
            <Router>
              <Routes>
                <Route exact path="/" element={<MainContainer />}/>
                <Route path="/login" element={<LoginContainer />}/>
                {/* <Route path="/item/:id" component={ItemContents} />
                <Route path="/signin" component={SigninContainer}/>
                <Route path="/cart" component={CartContainer}/> */}
              </Routes>
            </Router>
          </>
      );
  }
}

export default App;
