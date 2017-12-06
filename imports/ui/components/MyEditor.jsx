import React, { Component } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

export default class MyEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.onChange = (editorState) => {
      // console.log('editorState',editorState);
      this.setState({editorState});
    };

    this.logState = () => {
      const content = this.state.editorState.getCurrentContent();
      console.log(convertToRaw(content));
    };

    this.handleKeyCommand = this.handleKeyCommand.bind(this);
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

  _onTestLinkClick() {
    // console.log('currentContent',this.state.editorState.getCurrentContent());
    const contentState = this.state.editorState.getCurrentContent();

    const contentStateWithEntity = contentState.createEntity(
        'LINK',
        'MUTABLE',
        {url: 'http://www.gregoryfederico.com'}
      );

    // console.log()

    // const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

    // this.setState({
    //   editorState: RichUtils.toggleLink(
    //     newEditorState,
    //     newEditorState.getSelection(),
    //     entityKey
    //   ),
    //   showURLInput: false,
    //   urlValue: '',
    // }, () => {
    //   setTimeout(() => this.refs.editor.focus(), 0);
    // });


  }



  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onTestClick.bind(this)}>Test</button>
        <button onClick={this.logState}>Log State</button>
        <Editor 
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      </div>
    );
  }
}