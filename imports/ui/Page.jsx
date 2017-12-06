import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import AnimateOnChange from 'react-animate-on-change';

import Nav from './Nav.jsx';
import Sub from './Sub.jsx';
import Text from './components/Text.jsx';
import MyEditor from './components/MyEditor.jsx';
 
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
  	console.log('this.props page',this.props);
  }

  renderData(data, platform){
  	return (
  		<div>
	  		<h2>{data.content.title}</h2>

	  		<Nav routes={[
	      	{id: 0, url: `/page/${data.id}/facebook`, text: 'Facebook'},
	      	{id: 1, url: `/page/${data.id}/instagram`, text: 'Instagram'}
	      ]}/>

        {/*<Text content={data.content.sub_section.p} />*/}
        <MyEditor />
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

/*
<AnimateOnChange
      baseClassName="animate-container"
      animationClassName="animate-container-transition"
      animate=""
      >
        {this.renderData(this.props.pageData, this.props.platform)}
      </AnimateOnChange>

*/