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

function Demo3() {
    return (
      <li>
          <h3>style</h3>
          <p style={{color:'red', fontSize: '14px'}}>inline style is object rather than string</p>
      </li>
    );
}

function Demo4() {
    return (
        <li>
            <h3>Comments</h3>
            {/* Comments... */}
            <p>标签子节点内的注释应该写在大括号中</p>
        </li>
    );
}

function Demo5() {
    const arr = [
      <h3 key ={0}>Array</h3>,
      <p key={1}>Array will unwind automatically. Notice: each elem in array need key prototype</p>
    ];
    return (<li>{arr}</li>);
}

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>JSX语法</h2>
                <ul>
                    <Demo1 />
                    <Demo2 />
                    <Demo3 />
                    <Demo4 />
                    <Demo5 />
                </ul>
            </div>
        );
    }
}
