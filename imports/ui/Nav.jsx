import React, { Component } from 'react';

export default class Nav extends Component {

	render(){
		return (
			<nav>
				<ul>
					{this.props.routes.map(item => {
						return (
								<li key={item.id}><a href={item.url}>{item.text}</a></li>
							);
					})}
		  	</ul>
			</nav>
			);
	}

}