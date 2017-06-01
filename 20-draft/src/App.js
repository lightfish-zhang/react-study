import React from 'react';
import Editor from './Editor';
import SimpleMentionEditor from './SimpleMentionEditor';
import TableEditor from './TableEditor';
import Ueditor from './Ueditor';

export default function App() {
    return (<div>
      <div style={{ width: '400px', height: 'auto', margin: '20px', border: '1px black solid' }}><Editor /></div>
      <div style={{ width: '400px', height: 'auto', margin: '20px', border: '1px black solid' }}><SimpleMentionEditor /></div>
      <div style={{ width: '400px', height: 'auto', margin: '20px', border: '1px black solid' }}><TableEditor /></div>
      <div style={{ width: '400px', height: 'auto', margin: '20px', border: '1px black solid' }}><Ueditor id="content" height="200" /></div>
    </div>);
}
