import React ,{ Component } from 'react' 
import ReactDOM from 'react-dom'

/**
 * @name Lazyloadimg
 * @props.w width:String
 * @props.h height:String
 * @props.src img link :String
 * 
 */
export default class LazyImg extends Component {
  constructor(props){
    super(props)
    this.state = {
      showIn:false,
      w: this.props.w || '100%',
      h: this.props.h || '30vh'
    }
    this.img = new Image()
    this.img.onload = this.loadImg.bind(this)
    this.showImg = this._showImg.bind(this)
  }
  // check if img is whithin visiual window
  componentDidMount(){
    this.dom = ReactDOM.findDOMNode(this)
    this.parent = this.dom.parentNode
    if(this.props.w && this.props.h){
      parseInt(this.props.w) > this.parent.offsetWidth 
      ? this.setState({w:'100%',h: ((this.parent.offsetWidth / parseInt(this.props.w) ) * parseInt(this.state.h))  +'px'})
      : '';
    }
    this.dom.offsetTop > this.parent.offsetHeight
    ? this.parent.addEventListener("scroll",this.showImg)
    : this.timeout = setTimeout(()=>{this.img.src = this.props.src},300)
  }
  // show img when scroll to img
  _showImg(){
    if(this.parent.scrollTop + this.parent.offsetHeight >= this.dom.offsetTop){
      this.img.src = this.props.src
      this.parent.removeEventListener("scroll",this.showImg)
    }
  }
  // show image when image loaded
  loadImg(){
    this.setState({
      showIn: true
    })
  }
  componentWillUnmount(){
    this.img = null
    this.parent = null
    this.dom = null
    clearTimeout(this.timeout)
  }
  render(){
    const styles = {width: this.state.w, height: this.state.h}
    return(
      <div className={!this.state.showIn ? 'lazy lz-center' : 'lz-center lazy-load'} style={!this.state.showIn ? styles:{}}>
        {this.state.showIn?<img onDragStart={(e)=> e.preventDefault()} src={this.img.src}/> : ''}
      </div>
    )
  }
}