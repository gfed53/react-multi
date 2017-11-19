import React from 'react';

export const App = ({content}) => (
  <div id="main-container">
  	<header>
  		<nav>
  			<ul>
		  		<li><a href="/page/1">Page 1</a></li>
		  		<li><a href="/page/2">Page 2</a></li>
		  		<li><a href="/page/3">Page 3</a></li>
		  	</ul>	
  		</nav>
  	</header>
    {content}
  </div>
);