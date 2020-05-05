import React, {Component} from 'react';

import Css from '../../home.scss'
import {homeImg} from '@c/imgurls'
import SginIn from '../sgin'
import Portal from '@c/portal'
import {CSSTransition} from 'react-transition-group'
import Pop from '@c/windo'
import isPhone from '@/utils/isPhone'

/**
 * @name about
 */

export default class ShowMe extends Component{
  constructor(){
    super()
    this.state = {
      isInput:false // signin popup
    }
  }
  toAbout(){
    isPhone 
    ? document.querySelector(".mobile-nav").getElementsByTagName("a")[3].click() 
    : document.querySelector(".nav").getElementsByTagName("a")[3].click() // jump to about page
  }

  showSign(){
    this.setState({
      isInput:!this.state.isInput      
    })
  }
  render(){
    console.log(this.props.other)
    return(
      <div className="figure-pop-main">
        <ul className={Css.settBox}>
          <li>
            <div className={Css.glitch}>
              <img src={homeImg.glitch} alt=""/>
            </div>
          </li>
          <li>Frank's Personal Web</li>
          <li>v1.0.0</li>
          <li className={Css.settLink}><a className='needsclick' onClick={this.toAbout}>View More</a></li>
          <li><hr align='center' width='60%' style={{margin:'18px auto'}} color='#b99f51' size="1"/></li>
          <li>{this.props.other.user.email
              ?<em>{this.props.other.user.email}</em>
              :<a onClick={this.showSign.bind(this)}>Sign In</a>}
          </li>
          <li><em>{this.props.other.user.name}</em></li>
        </ul>
        <CSSTransition
          in={this.state.isInput}
            key='testsss'
            timeout={200}
            unmountOnExit
            classNames="fade">
         <Portal>
           <Pop unmove={true} close={this.showSign.bind(this)} title="Signin" type="white">
            <SginIn user={this.props.other.user} close={this.showSign.bind(this)} isErro={this.props.other.isErro} setUser={this.props.other.setUser}/>
           </Pop>
         </Portal>
        </CSSTransition>
      </div>
    )
  }
}