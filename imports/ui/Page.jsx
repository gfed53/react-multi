import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import AnimateOnChange from 'react-animate-on-change';

import { Fade } from './components/Fade.jsx';
import Nav from './Nav.jsx';
import Sub from './Sub.jsx';
import Text from './components/Text.jsx';
import MyEditor from './components/MyEditor.jsx';
 
// Task component - represents a single todo item
export default class Page extends Component {

	constructor(props) {
    super(props);
    this.state = {show: false};
  }

  componentDidMount(){
  	// testing
    this.detectUrlData();
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps);
    this.handleToggle();
    // this.handleToggle();
  }

  detectUrlData(){
  	console.log('this.props page',this.props);
  }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }));
    setTimeout(()=> {
      this.setState(({ show }) => ({
        show: !show
      }))
    }, 300);
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
    const { show } = this.state;
    return (
      <div>
        <Fade in={!!show} />
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