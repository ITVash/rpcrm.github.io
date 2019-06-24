import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import Map from './components/Map';
//import News from './components/News';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Map />
        <Post />
      </header>
    </div>
  );
}

export default App;
