import './App.css';
import HomePage from "./HomePage";
import React from 'react';
import Result from "./components/Result";
import ResultHotels from "./components/ResultHotels";


import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/flightResult" Component={Result} />
          <Route path="/hotelResult" Component={ResultHotels} />
        </Routes>
      </BrowserRouter>

    );
}

export default App;
