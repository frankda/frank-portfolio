import React from 'react'
import Cloud from './cloud'
import {mylabel} from '../about.scss'

/**
 * @name AboutMeCloud
 */

const labels = [
                 '#Cool',
                 '#90s',
                 '#Guitar',
                 '#Elvis',
                 '#foodie',
                 '#Thinker',
                ]

export default ()=>{
  return(
    <div className={mylabel}>
      {labels.map((t,i) => <Cloud key={i} text={t} index={i}/>)}
    </div>
  )
}