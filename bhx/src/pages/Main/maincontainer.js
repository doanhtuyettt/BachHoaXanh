import React from "react";
import Nav from "../Nav/nav";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";


function MainContainer(){
  const {handleClickSignIn} = useContext(ProductContext);
    
  return(
    <>
      <Header takeMessLogIn={handleClickSignIn}/>
      <Nav />
      <Footer />
    </>
  )
}

export default MainContainer;