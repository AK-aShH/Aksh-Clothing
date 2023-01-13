import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// TO autherise the user to its resources and where it is needed
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
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
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      // this.setState({currentUser: user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          },()=>{
            console.log(this.state);
          })
        })
      }
      else{
        this.setState({currentUser: userAuth});
      }
      // console.log(userAuth);
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
