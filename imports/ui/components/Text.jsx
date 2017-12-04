import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Text extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    // testing
    console.log('this.props text',this.props);
  }

  detectUrlData(){
    
  }

  renderData(data){


    return (
      <div className="text-inner">
        {data}
      </div>
      );
  }

  render() {
    return (
      <div className="text-container">
        {this.renderData(this.props.content)}
      </div>
    );
  }
}

{/*<p>{data}</p>*/}