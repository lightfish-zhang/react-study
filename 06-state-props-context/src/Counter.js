import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 无状态组件，父组件通过props通信
function Content(props) {
    return <p>Content component{"'"}s props.value : {props.value}</p>;
}

Content.propTypes = {
    value: PropTypes.number.isRequired
};

// 有状态组件，拥有生命周期
export default class Counter extends Component {
    constructor() {
        super();
        this.state = { value: 0 };
    }
    render() {
        return (
          <div>
            <button onClick={() => this.setState({ value: this.state.value + 1 })}>
                INCREMENT
            </button>
            <br /><br />
            Counter component state
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
            <Content value={this.state.value} />
          </div>
        );
    }
}

/*
# React 事件系统 `合成事件: 事件委派和自动绑定`
- virtual DOM 在内存中是以对象形式存在的
- React基于Virtual DOM实现了一个SyntheticEvent(合成事件)层
- 所有事件自动绑定到最外层，如需访问原声事件对象，使用nativeEvent属性
- 在JSX中，使用驼峰书写事件的属性名，如onClick，在HTML中，使用全小写，如onclick
## 事件委派
- 事件代理机制，不直接绑定`事件处理函数`到真实节点，而是绑定到结构的最外层
- 使用统一的事件监听器，维持一个映射来保存所有组件内部的事件监听和处理函数

*/
