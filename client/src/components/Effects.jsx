import React from 'react';
import Tone from 'tone';

//let sound = new Tone.Player("Vox_01.wav").toMaster();

class VocalFX extends React.Component {
  contructor(props) {
      this.state = {
        isToggleOn: false
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleClick2 = this.handleClick.bind(this);
      this.handleClick3 = this.handleClick.bind(this);
      this.handleClick4 = this.handleClick.bind(this);


      this.playAudio = () => {
        if (this.state.isToggleOn===true){
          this.button.play()
          
        }
      }
    }

    handleClick() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['C4', 'E4', 'G4', 'B4'], "8n")
    }

    handleClick2() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['A3', 'C#4', 'E4', 'G5'], "8n")
    }

    handleClick3() {
      var fmSynth = new Tone.FMSynth().toMaster()
      fmSynth.triggerAttackRelease('C5', "4n");
    }

    handleClick4() {
      var plucky = new Tone.PluckSynth().toMaster()
      plucky.triggerAttackRelease('Bb4');
    }

    
   

  render() {
    return(
      <div>
        <div className = 'buttonalign'>
          <button className = 'buttoncontainer' onClick={this.handleClick}>Poly Synth</button>                   
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick2}>Poly Synth</button>
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick3}>FM Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick4}>Bass FX</button>
        </div>
      </div>
    );
  
  }
}
export default VocalFX;