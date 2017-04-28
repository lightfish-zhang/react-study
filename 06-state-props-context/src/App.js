import React, { Component } from 'react';
import Counter from './Counter';
import MessageList1 from './Messagelist1';
import Messagelist2 from './Messagelist2';

export default class App extends Component {
    render() {
        return (
          <div>
            <h2>State and props</h2>
            <Counter />
            <br />
            <h2>Props and context</h2>
            <MessageList1 />
            <Messagelist2 />
          </div>
        );
    }
}
