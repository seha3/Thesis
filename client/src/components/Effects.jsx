import React from 'react';
import Tone from 'tone';

class VocalFX extends React.Component {
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
      this.handleClick8 = this.handleClick.bind(this);
      this.handleClick9 = this.handleClick.bind(this);
      this.handleClick10 = this.handleClick.bind(this);
      this.handleClick11 = this.handleClick.bind(this);
      this.handleClick12 = this.handleClick.bind(this);
      this.handleClick13 = this.handleClick.bind(this);
      this.handleClick14 = this.handleClick.bind(this);
      this.handleClick15 = this.handleClick.bind(this);
      this.handleClick16 = this.handleClick.bind(this);
      this.handleClick17 = this.handleClick.bind(this);
      this.handleClick18 = this.handleClick.bind(this);
      this.handleClick19 = this.handleClick.bind(this);
      this.handleClick20 = this.handleClick.bind(this);
      this.handleClick21 = this.handleClick.bind(this);
      this.handleClick22 = this.handleClick.bind(this);
      this.handleClick23 = this.handleClick.bind(this);
      this.handleClick24 = this.handleClick.bind(this);

      this.playAudio = () => {
        if (this.state.isToggleOn===true){
          this.button.play()
        }
      }
    }

    handleClick() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['C5', 'E5', 'G5', 'B5'], "8n")
    }
    handleClick2() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['A4', 'C#5', 'E5'], "8n")
    }
    handleClick3() {
      var fmSynth = new Tone.FMSynth().toMaster()
      fmSynth.triggerAttackRelease('C5', "4n");
    }
    handleClick4() {
      var duoSynth = new Tone.DuoSynth().toMaster();
      duoSynth.triggerAttackRelease("Bb4", "2n");
    }
    handleClick5() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("C4", "8n");
    }
    handleClick6() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("D4", "8n");
    }
    handleClick7() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['E4', 'G#4', 'B4', 'D#5'], "8n")
    }
    handleClick8() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['B3', 'D4', 'F4', 'A4'], "8n")
    }
    handleClick9() {
      var fmSynth = new Tone.FMSynth().toMaster()
      fmSynth.triggerAttackRelease('A4', "4n");
    }
    handleClick10() {
      var duoSynth = new Tone.DuoSynth().toMaster();
      duoSynth.triggerAttackRelease("G4", "2n");
    }
    handleClick11() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("E4", "8n");
    }
    handleClick12() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("F4", "8n");
    }
    handleClick13() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['G3', 'B3', 'D4', 'F#4'], "8n")
    }
    handleClick14() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['D3', 'F#3', 'A3'], "8n")
    }
    handleClick15() {
      var fmSynth = new Tone.FMSynth().toMaster()
      fmSynth.triggerAttackRelease('F4', "4n");
    }
    handleClick16() {
      var duoSynth = new Tone.DuoSynth().toMaster();
      duoSynth.triggerAttackRelease("E4", "2n");
    }
    handleClick17() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("G4", "8n");
    }
    handleClick18() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("A4", "8n");
    }
    handleClick19() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['F3', 'Ab3', 'C4', 'Eb4'], "8n")
    }
    handleClick20() {
      var synth = new Tone.PolySynth().toMaster()
      synth.triggerAttackRelease(['Eb3', 'Gb3', 'Bb3', 'Db4'], "8n")
    }
    handleClick21() {
      var fmSynth = new Tone.FMSynth().toMaster()
      fmSynth.triggerAttackRelease('E3', "4n");
    }
    handleClick22() {
      var duoSynth = new Tone.DuoSynth().toMaster();
      duoSynth.triggerAttackRelease("C3", "2n");
    }
    handleClick23() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("B4", "8n");
    }
    handleClick24() {
      var synth = new Tone.Synth().toMaster();
      synth.triggerAttackRelease("C5", "8n");
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
          <button className = 'buttoncontainer' onClick={this.handleClick4}>Duo Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick5}>Tone C4</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick6}>Tone D4</button>
        </div>
        <div className = 'buttonalign'>
          <button className = 'buttoncontainer' onClick={this.handleClick7}>Poly Synth</button>                   
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick8}>Poly Synth</button>
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick9}>FM Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick10}>Duo Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick11}>Tone E4</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick12}>Tone F4</button>
        </div>
        <div className = 'buttonalign'>
          <button className = 'buttoncontainer' onClick={this.handleClick13}>Poly Synth</button>                   
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick14}>Poly Synth</button>
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick15}>FM Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick16}>Duo Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick17}>Tone G4</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick18}>Tone A4</button>
        </div>
        <div className = 'buttonalign'>
          <button className = 'buttoncontainer' onClick={this.handleClick19}>Poly Synth</button>                   
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick20}>Poly Synth</button>
          <div class="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick21}>FM Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick22}>Duo Synth</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick23}>Tone B4</button>
          <div className="divider"/>
          <button className = 'buttoncontainer' onClick={this.handleClick24}>Tone C5</button>
        </div>
      </div>
    );
  
  }
}
export default VocalFX;