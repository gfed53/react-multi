import React, { Component } from 'react';

import Editor from 'draft-js-plugins-editor';

import { stateToHTML } from 'draft-js-export-html';
 
// Task component - represents a single todo item
export default class EditorOutput extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(next){
    // console.log('next text data',next);
  }

  componentDidMount(){
    // testing
    // console.log('this.props text data',this.props);
  }

  detectUrlData(){
    
  }

  renderData(data){

    
  }

  render() {
    return (
      <div className="text-container">
        <Editor
          editorState={this.props.data}
          readOnly={true}
        />
      </div>
    );
  }
}

{/*<p>{data}</p>*/}