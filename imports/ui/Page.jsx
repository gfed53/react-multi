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

  render() {
    return (
      <h2>Header Here</h2>
    );
  }
}