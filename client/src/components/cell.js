// import React from "react";
// import styled from "styled-components";
// import { darken } from "polished";

// const getBackground = (activated, triggered) => {
//   switch (true) {
//     case activated && triggered:
//       return darken(0.2, "#65daa2");
//     case activated && !triggered:
//       return "#65daa2";
//     case !activated && triggered:
//       return "#eef";
//     default:
//       return "white";
//   }
// };

// const Cell = styled.div.attrs(({ activated, triggered }) => ({
//   style: {
//     background: getBackground(activated, triggered)
//   }
// }))`
//   outline: 1px solid #eee;
//   grid-column: ${props => props.column};
//   grid-row: ${props => props.row};
// `;

// export default Cell;