import React, { Component } from 'react';

import Nav from './Nav.jsx';
import Sub from './Sub.jsx';
 
// Task component - represents a single todo item
export default class Page extends Component {

	constructor(props) {
    super(props);
  }

  componentDidMount(){
  	// testing
		this.detectUrlData();
  }

  componentWillReceiveProps(nextProps) {
  	console.log('nextProps',nextProps);
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
	  		<Sub section={platform}/>
  		</div>
  		);
  }

  render() {
    return (
    	<div>
      	{this.renderData(this.props.pageData, this.props.platform)}
      </div>
    );
  }
}