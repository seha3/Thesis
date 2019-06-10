import React from 'react';
import Tone from 'tone';

class Samples extends React.Component {
    contructor(props) {
        this.state = {
          isToggleOn: false
        };
this.handleClick = this.handleClick.bind(this);
this.handleClick2 = this.handleClick.bind(this);
this.handleClick3 = this.handleClick.bind(this);
this.handleClick4 = this.handleClick.bind(this);
this.handleClick5 = this.handleClick.bind(this);
this.handleClick6 = this.handleClick.bind(this);
this.handleClick7 = this.handleClick.bind(this);
this.playAudio = this.playAudio.bind(this);
  }
  playAudio = () => {
    if (this.state.isToggleOn===true){
      this.button.play()
    }
  }
  handleClick() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("C4", "1n");
  }
  handleClick2() {
    var synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("D4", "1n");
}
handleClick3() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("E4", "1n");
}
handleClick4() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("F4", "1n");
}
handleClick5() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("G4", "1n");
}
handleClick6() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("A4", "1n");
}
handleClick7() {
  var synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease("B4", "1n");
}

  // Tone.Buffer.supportsType("wav"); //returns true
  // Tone.Buffer.supportsType("./vox.mp3"); //returns true
  // var player = new Tone.Player({
  //   "url" : "./vox.mp3",
  //   "autostart" : true,
  // }).toMaster();

  // var buffer = new Tone.Buffer("Vox.wav", function(){
  //   var buff = buffer.get();
  // });
  render() {
    return (
      <div> 
        <div>
            <button className="samples" onClick={this.handleClick}>Samples</button>
            <button className="samples" onClick2={this.handleClick}>Samples</button>
            <button className="samples" onClick3={this.handleClick}>Samples</button>
            <button className="samples" onClick4={this.handleClick}>Samples</button>
          </div>
      </div>
    )
   };
  };

export default Samples