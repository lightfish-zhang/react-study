import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './src/App';

console.log('First Render');
let instance = render(<App />, document.getElementById('root'));

window.renderComponent = () => {
    console.log('render');
    instance = render(<App />, document.getElementById('root'));
};

window.setState = () => {
    console.log('update state');
    instance.setState({ foo: 'bar' });
};

window.unmountComponentAtNode = () => {
    console.log('unmount');
    unmountComponentAtNode(document.getElementById('root'));
};

console.log('JSX closed tag is ReactElement');
console.log(<h1>hello world</h1>);
console.log(<App />);

console.log('component、ReactElement与component instance');
console.log(App);
console.log(<App />);
console.log(instance);
