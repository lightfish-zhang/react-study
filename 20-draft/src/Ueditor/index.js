import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ueditor extends Component {
    static propTypes = {
        id: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.initEditor();
    }
    componentWillUnmount() {
    // 组件卸载后，清除放入库的id
        UE.delEditor(this.props.id);
    }
    initEditor() {
        const id = this.props.id;
        const ueEditor = UE.getEditor(this.props.id, {/* 这里是配置*/ });
        const self = this;
        ueEditor.ready((ueditor) => {
            if (!ueditor) {
                UE.delEditor(id);
                self.initEditor();
            }
        });
    }
    render() {
        return (
          <div id={this.props.id} name="content" type="text/plain" />
        );
    }
}
export default Ueditor;
