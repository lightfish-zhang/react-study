import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';
import 'draft-js-mention-plugin/lib/plugin.css';
import createTablePlugin from 'draft-js-table-plugin';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const tablePlugin = createTablePlugin({ Editor });

const plugins = [
    hashtagPlugin,
    linkifyPlugin,
    tablePlugin,
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
