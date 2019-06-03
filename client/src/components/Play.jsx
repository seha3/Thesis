import React from 'react';

class Play extends React.Component {
//   contructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     };
    
  
  render() {
    return(
      <div> 
        <div className="playpause">
            <input type="checkbox" value="" id="playPauseCheckbox" name="playPauseCheckbox" />
            <label for="playPauseCheckbox"></label>
        </div>
      </div>
    )
  }
 }
export default Play;