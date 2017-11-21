import React from 'react';

import Nav from './Nav.jsx';
import NavData from '/public/json/nav.json';

export const App = ({content, props}) => (
  <div id="main-container">
  	<header>
  		<Nav routes={props}/>
  	</header>
    {content}
  </div>
);

/*
<nav>
	<ul>
		<li><a href="/page/1">Page 1</a></li>
		<li><a href="/page/2">Page 2</a></li>
		<li><a href="/page/3">Page 3</a></li>
	</ul>	
</nav>


[
      	{id: 0, url: '/page/1/facebook', text: 'Page 1'},
      	{id: 1, url: '/page/2/facebook', text: 'Page 2'}
      ]

*/