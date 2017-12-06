import React, { Component } from 'react';
import { stateToHTML } from 'draft-js-export-html';
 
// Task component - represents a single todo item
export default class Text extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(next){
    console.log('next text data',next);
  }

  componentDidMount(){
    // testing
    console.log('this.props text data',this.props);
  }

  detectUrlData(){
    
  }

  renderData(data){

    // if(data.content){
    //   return (
    //     <div className="text-inner">
    //       {data}
    //     </div>
    //     );
    // }

    if(data.data){

      const currentContent = data.data.getCurrentContent();
      const options = {
        defaultBlockTag: 'div',
      };
      const html = stateToHTML(currentContent, options);
      console.log('typeof',typeof html);
      return (
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        )
    }
  }

  render() {
    return (
      <div className="text-container">
        {this.renderData(this.props)}
      </div>
    );
  }
}

{/*<p>{data}</p>*/}