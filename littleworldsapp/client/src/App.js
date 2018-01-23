import React, { Component } from 'react';
import './App.css';
import Top from './components/nav/header';
import Bottom from './components/nav/footer';
import SignUp from './components/signup';
import Island from './components/thailand';
import Background01 from './components/thailand-bits/background01.js';


class App extends Component {

  componentDidMount() {
    console.log("works");
  }

  render() {
      console.log("also works");
    return (
        <div id="container">
            <Top imageUri='./img/logo.png'>My App</Top>
            <SignUp></SignUp>
            <Island></Island>
            <Bottom imageUri='./img/logo2.png'>
            </Bottom>
        </div>
    );
  }
}


export default App;

