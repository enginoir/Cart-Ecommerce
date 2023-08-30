import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart'

<Route path="/cart" component={Cart} />

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/cart' element={< Cart />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;