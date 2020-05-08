import React from 'react'
import LazyImg from '@c/lazyImg'
import PopLink from '@c/poplink'
const pictring1 = '/gifs/story-map.gif'
const pictring2 = 'http://cdn.toofook.com/my-blog/work/pictring2.gif'
const pictring3 = 'http://cdn.toofook.com/my-blog/work/pictring3.gif'

export default ()=> {
  return(
    <article className="work-pop-main work-pop-code">
      <h1>Storymap</h1>
      <p>A map app, user can pin their comments on map</p>
      <h5>Stacks</h5>
      <ol className="work-list">
        <li><span>Ruby on Rails</span></li>
        <li><span>Jquery</span></li>
        <li><span>PostgreSQL</span></li>
        <li><span>Leaflet map</span></li>
      </ol>
      <LazyImg w="800px" h="800px" src={pictring1}/>
      <p>All user and comments information are stored in PostgreSQL, user can also edit their own comments and check others' comments</p>
      <p>Live site: <a href="https://frank-n-maria-story-map.herokuapp.com" target="_blank">https://frank-n-maria-story-map.herokuapp.com</a></p>
      <h5>Improvement in the future</h5>
      <p>1. Allow user to comment and like other's comments</p>
      <p>2. Add follow and favorite function, make it as a social platform, user can share their favorites with others using a share link.</p>
      <p>3. Add search funciton, user can seach location, keywords</p>
      <p>4. Combine comments together when zoom out</p>
      <PopLink href="https://github.com/frankda/story-map"/>
    </article>
  )
}