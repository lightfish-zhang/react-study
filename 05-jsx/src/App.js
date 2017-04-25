/* eslint-disable */
import React, { Component } from 'react';

const Demo1 = () => {
  return (
      <li>
          <h3>like HTML</h3>
          <p data-attribute='demo1'>can nest and define property</p>
      </li>
  );
};

const Demo2 = () => {
    let name = 'JSX';
    let func = ()=>{
        let result = 'hello';
        if(name)
            result += name;
        else
            result += 'world';
        return result;
    };
    return (
        <li>
            <h3>JavaScript Expression</h3>
            <p>hello {name || 'world'}</p>
            <p className={name ? 'class-a' : 'class-b'}>
                hello {name && 'world'}
            </p>
            <p>
                {func()}
            </p>
        </li>
    );
};

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>JSX语法</h2>
                <ul>
                    <Demo1 />
                    <Demo2 />
                </ul>
            </div>
        );
    }
}
