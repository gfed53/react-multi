import React from 'react';

import Nav from './Nav.jsx';

export const App = ({content, props}) => (
  <div id="main-container">
  	<header>
  		<Nav routes={props}/>
  	</header>
    {content}
  </div>
);