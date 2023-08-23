import Unit from './Unit' 
import './App.css';
import {useState, useEffect}from 'react';
import UnitForm from './UnitForm';
import axios from 'axios';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UnitList from './UnitList';

function App() {
  

  return (
    <Router>
      <div className='App'>
        <ul className='App-header'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/units">Units</Link>
          </li>
          <li>
            <Link to="/add-unit">Add unit</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/add-unit' element={<UnitForm />} />
          <Route exact path='/units' element={<UnitList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;