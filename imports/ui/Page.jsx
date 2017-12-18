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
    this.state = {
      show: false
    };
  }

  componentDidMount(){
  	// testing
    this.detectUrlData();
    this.setState(({ show }) => ({
      show: !show,
      lastProps: this.props
    }));
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps);
    
    console.log('this.props',this.props);
    console.log('this.state.lastProps',this.state.lastProps);
    
    //hide
    this.setState(({ show }) => ({
      show: !show
    }));

    //switch props
    setTimeout(()=> {
      this.setState({
        lastProps: nextProps
      });
    }, 150);

    //reveal
    setTimeout(()=> {
      this.setState(({ show }) => ({
        show: !show
      }));
    }, 300);
    
  }

  detectUrlData(){
  	console.log('this.props page',this.props);
  }

  //
  handleToggle() {
    //hide
    this.setState(({ show }) => ({
      show: !show
    }));

    //switch props
    setTimeout(()=> {
      this.setState({
        lastProps: nextProps
      });
    }, 150);

    //reveal
    setTimeout(()=> {
      this.setState(({ show }) => ({
        show: !show
      }));
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
    const props = this.state.lastProps || this.props;
    return (
      <div>
        <Fade in={!!show} child={this.renderData(props.pageData, props.platform)}/>

      {/* <AnimateOnChange
        baseClassName="animate-container"
        animationClassName="props-change"
        animate={this.props !== this.state.lastProps}
      >
        {this.renderData(this.props.pageData, this.props.platform)}
      </AnimateOnChange> */}
        
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