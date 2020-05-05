import React, {Component} from 'react'
import {
  CSSTransition,
} from 'react-transition-group';
import Pop from './iconPor';

/**
 * @name icon+popupWindow
 * props.src icon :String
 * props.text title text :String
 * props.isShow control popup :Boolean
 * props.other user email and name :Object
 * props.close popup close :Function
 * props.add like-button :Function
 */
export default class Icon extends Component{
  shouldComponentUpdate(nextProps){
    if(this.props.other){
      if(nextProps.other.user!==this.props.other.user)return true;
    }
    return nextProps.isShow !== this.props.isShow
  }

  handleShow(close,show){ // close all popup window then open window
    let open = new Promise(resolve =>{
       close()
       setTimeout(resolve,100)
    })
    open.then(()=> show())
  }
  handleHide(){
    this.props.close && this.props.close() 
  }
  render(){
    const isShow = this.props.isShow
    const Component = this.props.child 
    return(
    <div  className='figure-flex'>
        <figure onClick={this.handleShow.bind(this,this.props.close,this.props.show)}>
          <img src={this.props.src} alt=""/>
          <figcaption>{this.props.text}</figcaption>
        </figure>
        <CSSTransition
                in={isShow}
                key='test'
                timeout={200}
                unmountOnExit
                classNames="figure">
                <Pop close={this.props.close} type={this.props.type} title={this.props.text} unmove={this.props.unmove}>
                  <Component close={this.props.close} other={this.props.other} add={this.props.add}/> 
                </Pop> 
        </CSSTransition>
    </div>
    )
  }
}
