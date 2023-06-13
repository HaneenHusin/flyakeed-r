import './App.css';
import MyAppBar from './components/MyAppBar';
import MyBottomNavigationBar from "./components/MyBottomNavigationBar";
import HomePage from "./HomePage";
import React from 'react';
function App() {
    return (
        <div className="App">
            <MyAppBar/>
            <HomePage />
            <div className="bottom_toolbar"><MyBottomNavigationBar/></div>
        </div>
    );
}

export default App;
