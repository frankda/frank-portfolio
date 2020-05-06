import React from 'react'

/**
 * @name LinkDisplay
 * @props.href  :String
 */
export default function PopLink(props){
  return(
    <aside className="pop-link"> 
      <a target="_blank" href={props.href}>{props.href}</a>
    </aside>
  )
}