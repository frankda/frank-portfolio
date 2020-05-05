import React from 'react';
import {createPortal} from 'react-dom';

/**
 * @name PopupWindow
 */
export default class MyPortal extends React.Component {
  constructor() {
    super(...arguments)
    const doc = window.document;
    this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
  }
  clearboth(e){
    e.stopPropagation();
  }
  render() {
    return createPortal(
      <div  onMouseMove={this.clearboth} className="dialog">
          <div onMouseDown={this.clearboth} className="dialog-bg"></div>
        {this.props.children}
      </div>,
      this.node
    );
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
}