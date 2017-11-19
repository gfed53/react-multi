import React from 'react';

import Nav from './Nav.jsx';

export const App = ({content, routes}) => (
  <div id="main-container">
  	<header>
  		<Nav routes={[
      	{id: 0, url: '/page/1', text: 'Page 1'},
      	{id: 1, url: '/page/2', text: 'Page 2'}
      ]}/>
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


*/