import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// TO autherise the user to its resources and where it is needed
import {auth} from './firebase/firebase.utils';
// import { render } from 'node-sass';

class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }

  }

  unsubscribeFromAuth = null; //this is added to close the connection/subsciption between our app and firebase as its a open subscription and remains open till our app is mounted

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
