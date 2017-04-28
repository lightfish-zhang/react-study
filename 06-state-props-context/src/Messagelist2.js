import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Button(props, context) {
    return (
      <button style={{ background: context.color }}>
        {props.children}
      </button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired
};

Button.contextTypes = {
    color: PropTypes.string.isRequired
};

function Message(props) {
    return (
      <li>
        {props.text} <Button>Delete</Button>
      </li>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired
};

class MessageList extends Component {
    getChildContext() {
        return { color: 'grey' };
    }

    render() {
        const messages = [
        { text: 'Hello React' },
        { text: 'Hello React' }
        ];
        const children = messages.map((value, key) =>
          <Message key={key} text={value.text} />
        );
        return (
          <div>
            <p>By context, assign color to Button inside of Message</p>
            <ul>
              {children}
            </ul>
          </div>
        );
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string.isRequired
};

export default MessageList;
