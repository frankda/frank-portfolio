import React, {Component} from 'react'
import Css from './notfind.scss'

/**
 * @name 404
 */
export default class NotFind extends Component{
  render(){
    return(
      <div className={Css.notfind}>
        <div className='figure-pop figure-style-err'>
          <p className={Css.title}></p>
          <div className={Css.ErrText}>
            <h1>404</h1>
            <h3>FILE NOT FIND</h3>
            <a href="https://frankda.info/">HOME PLEASE</a>
          </div>
        </div>
      </div>
    )
  }
}