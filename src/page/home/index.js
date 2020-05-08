import React, {Component} from 'react';
import TextNode from './components/text'
import Footer from './components/footer'
import Switch from '@c/switch'
import MyIcon from './components/icons'
import Model from '@c/model'
/**
 * homepage component
 */

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      switchin:true,
      user:{
        email:null,
        name:null,
      },
      model: false,
      modelType: 'ok'
    }
    this.upload = 0
  }
  componentWillMount(){
    // check if cookie save user information or not
    let email = this.getCookie("testEmali")
    if(email){
      let name = this.getCookie("testName")
      this.setState({
        user:{
          name:name,
          email:email
        }
      })
    }
  }

  /**
   * get cookie
   * @param {string} name 
   */
  getCookie(name) 
  { 
    var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]); 
    else 
        return null; 
  } 
  setCookie(name,value){
        var exp = new Date();
        exp.setTime(exp.getTime() + 7 * 24 * 3600 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
  }
  /**
   * save user info to state（subcomponent invoke successfully）
   * @param {object} opt 
   */
  setLoading(opt){
    this.setState({
      user: opt,
      modelType: 'ok'
    })
    this.setCookie("testEmali",opt.email)
    this.setCookie("testName",opt.name)
    this.refs.model.show()
  }
  isErro(){
    this.setState({
      modelType: 'err'
    }) 
    this.refs.model.show()
  }
  // control animation between page switching
  switchOut(n){
    this.setState({
      switchin:n
    })
  }
  render(){
    return(
      <main className="page">
        <div className="app-center">
          <TextNode/>
          <Footer/>
          <MyIcon 
            user={this.state.user} 
            setUser={this.setLoading.bind(this)}
            isErro={this.isErro.bind(this)} 
          />
        </div>
        <Model ref='model' type={this.state.modelType} time="2000"/>
      {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''}
      </main>
    )
  }
}
