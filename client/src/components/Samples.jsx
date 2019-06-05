import React from 'react';
import Tone from 'tone';
class Samples extends React.Component {
//     contructor(props) {
//         this.state = {
//           isToggleOn: false
//         };
// this.handleClick = this.handleClick.bind(this);
// this.playAudio = () => {
//     if (this.state.isToggleOn===true){
//       this.button.play()
//     }
//   }
// var piano = SampleLibrary.load({
//     instruments: "piano"
//     });    
//    piano.toMaster();
//    piano.triggerAttack("A3");  

// var buffer = new Tone.Buffer("sounds/Vox_01.wav", function(){
// 	//the buffer is now available.
// 	var buff = buffer.get();
// });

  render() {
    return (
      <div> 
        <div>
        <button className="samples" onClick={this.handleClick}>Samples</button>
        </div>
      </div>
    )
   };
  };
 
export default Samples;