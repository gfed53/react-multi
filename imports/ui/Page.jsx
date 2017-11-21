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

  componentWillReceiveProps(one, two) {
  	console.log('one',one);
  	// console.log('this.props',this.props);
  }

  detectUrlData(){
  	console.log('this.props',this.props);
  }

  renderData(data, platform){
  	return (
  		<div>
	  		<h2>{data.content.title}</h2>
	  		<Nav routes={[
	      	{id: 0, url: `/page/${data.id}/facebook`, text: 'Facebook'},
	      	{id: 1, url: `/page/${data.id}/instagram`, text: 'Instagram'}
	      ]}/>
	  		<p>{data.content.p}</p>
	  		{/*content*/}

	  		<Sub section= {platform}/>
	  		
  		</div>
  		);
  }

  render() {
    return (
    	<div>
      	{this.renderData(this.props.data, this.props.platform)}
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