import React from 'react';
import {footer} from '../../home.scss'
/**
 * @name footer
 */
export default function TextNode () {
  const date = new Date()
  const dateValue = " Date = " + date.getFullYear()+'/'+(+date.getMonth()+1)+'/'+date.getDate()
    return (
      <footer className={footer}>
        <ul>
          <li><b>const</b>{dateValue}</li>
          <li><b>const</b> UseTime = 4s</li>
          <li><b>const</b> Add=Sydney</li>
          <li><a href="./frankda-resume.pdf">My Resume</a></li>
          <li><a href="mailto:frank_da@outlook.com">frankda_da@outlook.com</a></li>
        </ul>
      </footer>
    )
}
