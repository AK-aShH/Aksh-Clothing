import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';

const HatsPage = () => {
  return (
    <div>
      HatsPage
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
