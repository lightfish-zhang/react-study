import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
      /**
       * fun.bind(thisArg[, arg1[, arg2[, ...]]])
       * @url (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
       */
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {

    }

}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};
