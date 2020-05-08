import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/root';
import registerServiceWorker from './registerServiceWorker';
import './components/globalcss/init.scss'
import 'prismjs/themes/prism.css'
import * as imgUrls from './components/imgurls'
import FastClick from 'fastclick'
FastClick.attach(document.body);


// preload image
var myloadingimgs = []
for(let i in imgUrls){
  myloadingimgs.push(imgUrls[i])
}

// loading animation dom
var loadingDiv = document.getElementById('pageloading')

// check browser campatibility
var useTransform
  = (loadingDiv.style['msTransform'] && 'msTransform')
  || (loadingDiv.style['webkitTransform'] && 'webkitTransform')
  || (loadingDiv.style['MozTransform'] && 'MozTransform')
  || (loadingDiv.style['OTransform'] && 'OTransform') 
  || 'transform';

var imgloadindex = 0 // Loaded image quantities

var imgNum = 0 // Total image quantities

myloadingimgs.map(urls => {
  for (let i in urls) {
    imgNum ++
    let img = new Image()
    img.onload = () => {
      // count plus 1 when image successful loaded
      imgloadindex++
      reactloading()
    }
    img.src = urls[i]
  }
})

function reactloading() {
  const styles = 'scaleX(' + (imgloadindex / (imgNum - 3)).toFixed(2) + ')';
  loadingDiv.style[useTransform] = styles;
  if(imgloadindex >= imgNum-1){
    ReactDOM.render(<App />, document.getElementById('root'))
    loadingDiv = myloadingimgs = useTransform = imgloadindex = imgNum = null
  } 
}
registerServiceWorker();

