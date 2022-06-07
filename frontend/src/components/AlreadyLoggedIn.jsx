import React from 'react'
import "../scss/_currentlyunavaliable.scss";
import Footer from './Footer';
import Header from './Header';

function AlreadyLoggedIn() {
  return (
    <>
    <Header/>
    <div className="Container-fluid cu-container">
      <h1>You are already Logged In !!</h1>
      <p>
        Please return to <a href='/'>Homepage</a> and explore more.
        
      </p>
    </div>
    <Footer/>
   </>
  )
}

export default AlreadyLoggedIn