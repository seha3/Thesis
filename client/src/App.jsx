import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import VocalFX from './components/Effects.jsx';


class App extends Component {
  render() { 
    return <div>Welcome to a Modern Minimal React Boilerplate
     
      < VocalFX />
    
    </div>;
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
