import React from 'react';
import Transition from 'react-transition-group/Transition';

import Nav from './Nav.jsx';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 }
};

export const App = ({content, props}) => (
  <div id="main-container">
  	<header>
  		<Nav routes={props}/>
  	</header>
    {content}
  </div>
);

/*
<Transition
    in={content}
    timeout={duration}
    >
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
       {content}
      </div>
    </Transition>

*/