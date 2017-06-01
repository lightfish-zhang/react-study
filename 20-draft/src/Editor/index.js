import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';
import 'draft-js-mention-plugin/lib/plugin.css';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
    hashtagPlugin,
    linkifyPlugin,
];

export default class UnicornEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
          />
        );
    }
}
