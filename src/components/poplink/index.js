import React from 'react'

/**
 * @name LinkDisplay
 * @props.href  :String
 */
export default function PopLink(props){
  return(
    <aside style={{marginBottom: "1.4rem"}} className="pop-link">
      {props.gitLink
      ? <p style={{display: "inline"}}>Git Repo: </p>
      : <p style={{display: "inline"}}>Live Site: </p>} 
      <a target="_blank" href={props.href}>{props.href}</a>
    </aside>
  )
}