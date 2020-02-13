import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <div>
      <Nav
        user={this.state.user}
        handleLogout={this.handleLogout}
      />
      <MainPage />
      </div>
    </div>
  );
}

export default App;
