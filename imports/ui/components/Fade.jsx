import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 150;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export const Fade = (props) => (
  <Transition in={props.in} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {props.child}
      </div>
    )}
  </Transition>
);

// class Example extends React.Component {
//   state = { show: false }

//   handleToggle() {
//     this.setState(({ show }) => ({
//       show: !show
//     }))
//   }
  
//   render() {
//     const { show } = this.state
//     return (
//       <div>
//         <button onClick={() => this.handleToggle()}>
//           Click to toggle
//         </button>
//         <div>
//           <Fade in={!!show} />
//         </div>
//       </div>
//     )
//   }
// }