import React, { Component } from 'react';

import Nav from './Nav.jsx';
import Sub from './Sub.jsx';
import { SubLayout } from './SubLayout.jsx';
 
// Task component - represents a single todo item
export default class Page extends Component {

	constructor(props) {
    super(props);
  }

  componentDidMount(){
  	// testing
		this.detectUrlData();
  }

  detectUrlData(){
  	console.log('this.props',this.props);
  }

  renderData(data){
  	return (
  		<div>
	  		<h2>{data.content.title}</h2>
	  		<Nav routes={[
	      	{id: 0, url: `#facebook`, text: 'Facebook'},
	      	{id: 1, url: `#instagram`, text: 'Instagram'}
	      ]}/>
	  		<p>{data.content.p}</p>
	  		{/*content*/}

	  		{/*Loop strategy*/}
	  		{Object.values(data.content.sections).map(section => {
	  			// Just for testing
	  			var pStyle = {
	  				margin: '5em 0'
	  			};

	  			return (
	  				<div className="sub-section" id={section.link}>
		  				<h3>{section.title}</h3>
		  				<p style={pStyle}>{section.p}</p>
	  				</div>
	  				);
	  		})}
	  		
  		</div>
  		);
  }

  render() {
    return (
    	<div>
      	{this.renderData(this.props.data)}
      </div>
    );
  }
}


/*

// Nav component used for nested views strategy

<Nav routes={[
	{id: 0, url: `/page/${data.id}/section/${data.content.sections.facebook.link}`, text: 'Facebook'},
	{id: 1, url: `/page/${data.id}/section/${data.content.sections.instagram.link}`, text: 'Instagram'}
]}/>


*/