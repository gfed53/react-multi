import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Sub extends Component {

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
	  		Sub data would go here.
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