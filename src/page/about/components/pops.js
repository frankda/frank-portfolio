import React, { Component } from 'react'
import Pop from '@c/windo'
import Css from '../about.scss'
import {aboutImg} from '@c/imgurls'
import CityRun from './city'
import MyLabel from './label'
import Friends from './friends'
/**
 * @name AboutArea
 */

// photo
export function Photo(){
  return (
    <Pop  
      noClose={true}
      title="Photo"
      type="main"
      unmove={true}
    >
     <div className={Css.myfont}>
      <img src={aboutImg.myfont} alt=""/>
    </div> 
    </Pop>
  )
}

// email
export function Mail(){
  return (
    <Pop  
      noClose={true}
      title="Mail"
      type="pink"
      unmove={true}
    >
      <div className={Css.img}>
        <img src={aboutImg.imail} alt=""/>
      </div> 
      <h3>frank_da@outlook.com</h3>
      <a href="mailto:frank_da@outlook.com" className={Css.linkIcon}></a>
    </Pop>
  )
}

//  About Me
export class Introduce extends Component{
  render(){
    return(
      <Pop  
        noClose={true}
        title="About Me"
        type="light"
        unmove={true}
      >
      <div className={Css.city}>
        <CityRun/>
        <MyLabel/>
      </div> 
      </Pop>      
    )
  }
}

// Git
export function Git(){
  return (
    <Pop  
      noClose={true}
      title="GitHub"
      type="violet"
      unmove={true}
    >
      <div className={Css.img}>
        <img src={aboutImg.igit} alt=""/>
      </div> 
      <h3>https://github.com/frankda</h3>
      <a href="https://github.com/frankda" rel="external" target="_blank" className={Css.linkIcon}></a>
    </Pop>
  )
}

// linkedin
export function WeiChart(){
  return (
    <Pop  
      noClose={true}
      title="LinkedIn"
      type="wathet"
      unmove={true}
    >
      <div className={Css.img}>
        <img src="/linkedinlogo.png" alt=""/>
      </div> 
      <h3>https://www.linkedin.com/in/frankda/</h3>
      <a href="https://www.linkedin.com/in/frankda/" rel="external" target="_blank" className={Css.linkIcon}></a>
    </Pop>
  )
}


// address
export function MyAdd(){
  return (
    <Pop  
      noClose={true}
      title="Where"
      type="wathet"
      unmove={true}
    >
      <div className={Css.addImg}>
        <p>Sydney</p>
      </div> 
    </Pop>
  )
}


// My Story
export function OurLink(){
  return (
    <Pop  
      noClose={true}
      title="My Story"
      type="pink"
      unmove={true}
    >
     <div className={Css.aboutMe}>
        <p>I am a freshly-minted junior developer based in Sydney, Australia.</p>
        <br />
        <p>I have 2 years experience working and managing projects in the construction industry... coincidentally the same amount of time it took me to realise that playing with computers is infinitely more fun than playing with concrete.</p>
        <br />
        <p>
        I have always been obsessed with technology and I love to create things. Learning to program has opened up a world of new ways for me to be creative and build cool stuff.</p>
     </div> 
    </Pop>
  )
}