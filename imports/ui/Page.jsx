import React, { Component } from 'react';
 
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
	  		<p>{data.content.p}</p>
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