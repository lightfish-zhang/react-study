import React from 'react';
import ReactDOM from 'react-dom';

// class component vs function component
/*
//注意元件開頭第一個字母都要大寫
class MyComponent extends React.Component {
    // render 是 Class based 元件唯一必須的方法（method）
    render() {
        return (
            <div>Hello, World!</div>
        );
    }
}

//將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent/>, document.getElementById('app'));
*/


// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const MyComponent = () => (
  <div>Hello, World!</div>
);

// 將 <MyComponent /> 元件插入 id 為 app 的 DOM 元素中
ReactDOM.render(<MyComponent />, document.getElementById('app'));
