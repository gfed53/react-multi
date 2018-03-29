import React, { Component } from 'react';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';

const linkifyPlugin = createLinkifyPlugin({
  target: '_blank'
}
);

// testing
import Text from './Text';
import EditorOutput from './EditorOutput';

export default class MyEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      readOnly: false,
      showingOutput: false
    };

    this.onChange = (editorState) => {
      // console.log('editorState',editorState);
      this.setState({editorState});
    };

    this.logState = () => {
      const content = this.state.editorState.getCurrentContent();
      console.log(convertToRaw(content));
    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.onReadToggleClick = this._onReadToggleClick.bind(this);
    this.onRevealOutput = this._onRevealOutput.bind(this);
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onTestClick() {
    console.log('currentContent',this.state.editorState.getCurrentContent());

  }

  _onReadToggleClick() {
    console.log('currentContent',this.state.editorState.getCurrentContent());

    this.setState((prevState, props) => {
      return {
        readOnly: !prevState.readOnly
      }
    })

    setTimeout(() => { console.log('this.state',this.state); }, 0);

  }

  _onRevealOutput() {
    this.setState({
      showingOutput: true
    });
  }



  render() {
    const output = this.state.showingOutput ? 
    (
      <div>
        <h3>HTML output</h3>
        <EditorOutput data={this.state.editorState} />
        <button>Edit</button>
      </div>

    ) : null;

    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onTestClick.bind(this)}>Test</button>
        <button onClick={this.logState}>Log State</button>
        <button onClick={this.onRevealOutput}>Save</button>
        <Editor 
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          plugins={[linkifyPlugin]}
          readOnly={this.state.readOnly}
        />
        {output}
        
        
      </div>
    );
  }
}