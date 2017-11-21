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

  // renderData(data){
  // 	return (
  // 		<div>
	 //  		Sub data would go here.
  // 		</div>
  // 		);
  // }

  render() {
    return (
      <div className="sub-section" id={this.props.section.link}>
        <h3>{this.props.section.title}</h3>
        <p>{this.props.section.p}</p>
      </div>
    );
  }
}