import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
// import Wizard from './component/Wizard/Wizard';
import routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>  
        {routes}
      </div>
    );
  }
}

export default App;
