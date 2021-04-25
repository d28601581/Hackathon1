import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import './TextEditor.css';


export default class TextEditor extends Component {
    constructor() {
        super()
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        return (
            <div>
                
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                />

            </div>

        );
    }
}
