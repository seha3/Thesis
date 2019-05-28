import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import VocalFX from './components/Effects.jsx';
import DrumMachine from './components/DrumMachine.jsx';
//import Play from './components/Play.jsx';


class App extends Component {
  render() { 
    return  <div>
        <h1 id= 'welcome'>TONE MACHINE</h1>

  
      < VocalFX />    
      < DrumMachine />
    </div>;
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
