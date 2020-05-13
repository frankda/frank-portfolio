import React from 'react'
import LazyImg from '@c/lazyImg'
import Prism from 'prismjs'
import PopLink from '@c/poplink'


const text = {
  obs:`    // 监听roader.change的变化，显示相应页面
         observe(obj, key){    
          Object.defineProperty(
              obj.roader, key, {
                  get: function(){
                      return this["now"];
                  },
                  set: function(x){
                    // 储存要跳转的页面及旧页面
                    this["old"]=this["now"];
                    this["now"]=x;
                    //跳转动画
                    obj.animat.call(obj, obj.roader)
                  }
              }
          )
        }
        animat(roader){
            // 获取旧页面及新页面dom,旧页面隐藏，新页面显示 ;执行绑定动画
            let [oldPage, nowPage] = [$("[index=\'"+roader["old"]+"\']"), $("[index=\'"+roader["now"]+"\']")];
            let nowFn = nowPage.attr("now")
            let oldFn = oldPage.attr("old")
            nowPage.show();
            oldFn && this.opt.old[this.rep(oldFn)](this, oldPage);
            nowFn && this.opt.now[this.rep(nowFn)](this, nowPage);
        };
        ...
        ele.find("[tap]").each(function(){
            let tapFn = iOh.opt.tap[iOh.rep($(this).attr("tap"))] 
            $(this).on("tap", function(evt){
                    tapFn.call(this, iOh, evt);
                    evt.stopPropagation();
            })
        });`,
    new:`    <div class="page" index="3" now="{{signPageIn}}" old="{{signPageOut}}">
        ...
        <span class="help" tap="{{help}}">
            <img src="./images/help.png" alt="">
        </span>
    </div>

    #index.js
    var iOh = new ioh({
        ele: "#view", // 根节点
        now: {
            ... // 新页面过渡动画
        },
        old: {
            ... // 旧页面过度动画
        },
        tap: {
            ... // 绑定的tap事件     
        }
    })`
}

const ckobsTtml = Prism.highlight(text.obs,Prism.languages.javascript, 'javascript')
const cknewHTml = Prism.highlight(text.new,Prism.languages.javascript, 'javascript')

export default ()=>{
  return(
    <article className="work-pop-main work-pop-code">
      <h1>Price Comparison</h1>
      <p>A web crawler to scrape price for the same product from different online grocery store</p>
      <PopLink gitLink={true} href="https://github.com/frankda/price-comparison-client"/>
      <PopLink gitLink={true} href="https://github.com/frankda/price-comparision-server"/>
      <PopLink gitLink={false} href="https://price-to-price.netlify.app/"/>
      <h5>Stacks</h5>
      <ol className="work-list">
        <li><span>React</span></li>
        <li><span>Expressjs</span></li>
        <li><span>MongoDB</span></li>
      </ol>
      <LazyImg w="320px" h="572px" src="/gifs/price-comparison.gif"/>
      <p>This is a full stack project, currently, only supports scraping products from Chemist Warehouse</p>
      <p>Use <strong>superagent</strong> to send request to target server and use <strong>cheerio</strong> to parse page source and extract information</p>
      <h5>To Do:</h5>
      <p>1. Supports searching products from priceline</p>
      <p>2. Add user signup and sign in function using passportjs</p>
      <p>3. Improve accessibility</p>
    </article> 
  )
}