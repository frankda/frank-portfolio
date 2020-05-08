import React, { Component } from 'react';
import Switch from '@c/switch'
import ListCompon from './listcomponent'
import {workIcon} from '@c/imgurls'
import isPhone from '@/utils/isPhone'
import {scroll, more, moreIcon} from './work.scss'
import code from './codes'

/**
 * @name workpage
 */

export default class Work extends Component{
  constructor(){
    super();
    this.state={
    codeFigu:
    [
        { src: '/icons/game.png', text: 'Tic Tac Toe', isShow: false, child: code.game,type:'white'},
        { src: workIcon.jquo, text: 'Market Campagin', isShow: false, child: code.jquo,type:'white'},
        { src: workIcon.pictring, text: 'Story Map', isShow: false, child: code.pictring,type:'white'},
        { src: workIcon.chick, text: 'Price Comparison', isShow: false, child: code.chicken,type:'white'},
        { src: workIcon.blog, text: 'My Blog', isShow: false, child: code.myblog,type:'white'},
    ],
    switchin:true
    }
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.switchOut = this.switchOut.bind(this);
  }
  show(n){
    let index = null
    let newFigu = this.state.codeFigu
    index = this.state.codeFigu.indexOf(n);
    newFigu[index].isShow = true
    this.setState({
      codeFigu: newFigu,
      types:"code",
    });

  }
  close(){
    let newCode = this.state.codeFigu
    newCode.map(i=>i.isShow=false)
    this.setState({
      codeFigu:newCode
    })
  }
  switchOut(n){
    this.setState(
      {
        switchin:n
      }
    )
  }
  toAbout(){
    isPhone 
    ? document.querySelector(".mobile-nav").getElementsByTagName("a")[3].click() 
    : document.querySelector(".nav").getElementsByTagName("a")[3].click() // Jump to about page
  }
  render(){
    const type = this.state.types
    return (
      <main className={"page "+scroll}>
        <div style={{height:'auto',paddingBottom:'6rem'}} className="app-center">
          <ListCompon style={type==="code"} title="Code" figures={this.state.codeFigu} shows={this.show}  close={this.close}/>
          <div onClick={this.toAbout} className={more}>
            <span className={moreIcon}>
              <i></i>
            </span>
            <span className="needsclick">VIEW MORE</span>
          </div>
          {this.state.switchin?<Switch type="enter" callback={this.switchOut}/>:''}
        </div>
      </main>
    )
  }
} 