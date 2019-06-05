import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import Tone from 'tone';
import VocalFX from './components/Effects.jsx';
//import DrumMachine from './components/DrumMachine.jsx';
import Play from './components/Play.jsx';
import Samples from './components/Samples.jsx';
import Steps from './components/Steps.jsx';
import Sequencer from "./components/secuencer";
import PlayerProvider from "./components/player-provider";

class App extends Component {
  render() { 
    return  (
            <div>
              <h1 id= 'welcome'>TONE MACHINE</h1>
              <div className = 'componentDiv'>
                < VocalFX />    
              </div>
              <div className = 'componentDiv'>
                < Play />    
              </div>
              <div className = 'componentDiv'>
               
              </div>
              <div className = 'componentDiv'>
                < Samples />
              </div>
              <div className = 'Steps'>
                < Steps />
              </div>
              <div className = 'Steps'>
              <PlayerProvider>
                {({ player }) => {
                  if (!player) {
                    return <p>loading....</p>;
                  }
                    return <Sequencer player={player} />;
                }}
              </PlayerProvider>
              </div>
            </div>
    );
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
