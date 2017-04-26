import React, { PropTypes } from 'react';

function Button(props) {
    return (
      <button style={{ background: props.color }}>
        {props.children}
      </button>
    );
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
};

function Message(props) {
    return (
      <li>
        {props.text} <Button color={props.color}>Delete</Button>
      </li>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

function MessageList() {
    const color = 'gray';
    const messages = [
      { text: 'Hello React' },
      { text: 'Hello React' }
    ];
    const children = messages.map((value, key) =>
      <Message key={key} text={value.text} color={color} />
    );
    return (
      <div>
        <p>props assign color to Button</p>
        <ul>{children}</ul>
      </div>
    );
}

export default MessageList;
