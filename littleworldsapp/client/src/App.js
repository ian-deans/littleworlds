import React, { Component } from 'react';
import './App.css';
import Top from './components/nav/header';
import Bottom from './components/nav/footer';
import SignUp from './components/signup'


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
            <Bottom imageUri='./img/logo2.png'>
            </Bottom>
        </div>
    );
  }
}


export default App;

