import React, { Component } from 'react';
/**
 * @name AnimationInSwitch
 * @props.type enter or leave :String
 * @props.callback  :Function
 */
export default class SwitchTransition extends Component {
  constructor(){
    super();
    this.boxnum = 16;
    let list = []
    for(let i=0; i<this.boxnum; i++){
      list.push({active:false})
    }
    this.state = {
      active:true,
      dom:list // 16个距形
    }
  }
  componentDidMount(){
    let order = this.shuffle(16)
    let newDom = this.state.dom;
    let i = -1;
    let aniTimeout = ()=>{
        i++;
        if(i >= order.length)return;
        newDom[order[i]].active = true;
        this.setState({
          dom:newDom
        })
    }
    this.setAnimate = setInterval(aniTimeout,17)
    this.setCallback = setTimeout(() => {
       this.props.callback && this.props.callback(false)
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.setAnimate)
    clearTimeout(this.setCallback)
  }
  shuffle(n) {
      //生成m张牌
      let arr = new Array(n);
      for (var i=0; i<n; i++) {
          arr[i] = i;
      }
      var newArr = []
      for (let i=n; i > 0; i--) {
          var length = Math.floor(Math.random() * i);
          newArr.push(arr[length]);
          arr.splice(length,1);
      }
      return newArr;
  }
  render(){
    const classNames = {
      animate:`animate-${this.props.type}`,
      active: `active-${this.props.type}`
    } 
    return (
    <div className={classNames.animate}>
      {this.state.dom.map((i,k) => <span key={k} className={i.active? classNames.active : ''}></span>)}
    </div>
    )
  }
}

