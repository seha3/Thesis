import React from 'react';
//import '../play.scss';
import $ from 'jquery';
import '../play.css';


class Play extends React.Component {
//   contructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     };
    componentDidMount( {
        $(document).ready(function() {
            var state = "paused";
            $('#pause').on('click', function() {
                if(state == 'paused') {
                    state = "playing";
                    $("#circle").attr("class", "play");
                    $("#from_pause_to_play")[0].beginElement();
                } else {
                    state = "paused";
                    $("#circle").attr("class", "");
                    $("#from_play_to_pause")[0].beginElement();
                }
            });
        });
    
  }
  render() {
    return(
      <div> 
        <svg width="104" height="104" id='pause'>
            <circle id="circle" cx="51" cy="51" r="50" stroke-dasharray="314" stroke-dashoffset="0" style="stroke-width:2px;stroke:white;" />
            <line id='line1' x1="38" y1="30" x2="38" y2="70" style="stroke-width:4px;stroke:white;stroke-linecap: round;" />
            <path id='line2' d="M 66 30 L 66 50 L 66 70" rx="10" ry="10" style="stroke-width:4px;stroke:white;fill:white;stroke-linejoin: round;stroke-linecap: round;">
                <animate
                    attributeName="d"
                    dur="300ms"
                    from="M 66 30 L 66 50 L 66 70"
                    to="M 38 30 L 70 50 L 38 70"
                    begin="indefinite"
                    fill="freeze"
                    id="from_pause_to_play"
                />
            </path>
            <animate
                xlink:href="#line2"
                attributeName="d"
                dur="300ms"
                from="M 38 30 L 70 50 L 38 70"
                to="M 66 30 L 66 50 L 66 70"
                fill="freeze"
                id="from_play_to_pause"
                begin="indefinite"
            />
      </div>
    )
  }
  
 }
export default Play;