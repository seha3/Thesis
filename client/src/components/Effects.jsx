import React from 'react';
import Tone from 'tone';

//let sound = new Tone.Player("Vox_01.wav").toMaster();

class VocalFX extends React.Component {
  contructor(props) {
      this.state = {
        isToggleOn: false
      };
      this.handleClick = this.handleClick.bind(this);


      this.playAudio = () => {
        if (this.state.isToggleOn===true){
          this.button.play()
          
        }
      }
    }
    handleClick() {
      var synth = new Tone.Synth().toMaster()
      console.log('synth', synth)
      synth.triggerAttackRelease("C4", "8n")

      // var buffer = new Tone.Player("./Vox_01.wav").toMaster()
      // Tone.Buffer.on('load', () => {
      //   buffer.start();
      // })

      // var buffer = new Tone.Buffer('sounds/Vox_01.wav');
    }

    
   

  render() {
    return(
      <div>
        <div className = 'buttonalign'>
          <button className = 'buttoncontainer' onClick={this.handleClick}><audio ref={(button) => {this.button = button;}}></audio>Voice FX</button>                   
          <div class="divider"/>
          <button className = 'buttoncontainer'>Voice FX</button>
          <div class="divider"/>
          <button className = 'buttoncontainer'>Bass FX</button>
          <div className="divider"/>
          <button className = 'buttoncontainer'>Bass FX</button>
        </div>
      </div>
    );
  
  }
}
export default VocalFX;