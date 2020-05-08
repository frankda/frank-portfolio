import React from 'react';
import {createPortal} from 'react-dom';

/**
 * @name alert
 * @props.type alert type 'ok' || 'err'
 * @props.time alert duration :Number<String>
 * @props.close alert close :Function
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
  clearmove(e){
   e.stopPropagation();   
  }
  render() {
    return createPortal(
      <div className={`model-pop model-${this.props.type}`}>
        <h1>{this.props.text || (this.props.type==='ok'? 'Success':'Request error, Retry')}</h1>
      </div>, 
      this.node
    );
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
}
