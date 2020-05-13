import React from 'react'
import Prism from 'prismjs'
import PopLink from '@c/poplink'
import LazyImg from '@c/lazyImg'

const text = {
  fn:`    //工厂函数
    function jQuo(selector) {
        return new jQuo.fn.init(selector);
    }
    jQuo.fn = jQuo.prototype = {
        //修正指向
        constructor: jQuo,
        ...
    }
    // init入口
    var init = jQuo.fn.init = function(selector) {
        ...
    }
    //提供制作插件访问原型的接口
    init.prototype = jQuo.fn;
    w.jQuo = w.$ = jQuo;`,
    init:`    var init = jQuo.fn.init = function(selector) {
        if (!selector) {
            return this;
        }
        if (typeof selector == 'function') {
            jQuo.ready(selector);
        } else if (typeof selector === "string") {
            var ele = jQuo.trim(selector);
            //如果是html片段  创建dom添加到实列
            if (jQuo.isHtml(ele)) {
                var tempDiv = document.createElement('div');
                tempDiv.innerHTML = ele;
                [].push.apply(this, tempDiv.childNodes);
                return this;
            } else {
                try {
                    var nodes = document.querySelectorAll(ele);
                    [].push.apply(this, nodes);
                    return this;
                } catch (e) {
                    this.length = 0;
                    return this;
                }
            }
        } else if (jQuo.isLikeArray(selector)) {
            //解决IE8 apply无法借用伪数组
            [].push.apply(this, [].slice.call(selector));
            return this;
        } else {
            this[0] = ele;
            this.length = 1;
        }
    };`
}

const jqHtml = Prism.highlight(text.fn,Prism.languages.javascript, 'javascript')
const jqinitHtml = Prism.highlight(text.init,Prism.languages.javascript, 'javascript')
export default ()=>{
  return(
    <article className="work-pop-main work-pop-code">
      <h1>Market Research Tool for Company Ads</h1>
      <p>A small app allow company post their ads on. Participants can check select which ads they have seen.</p>
      <PopLink gitLink={true} href = "https://github.com/joshpanebianco/improved-guide"/>
      <PopLink gitLink={false} href = "https://campaign-ads-markt.netlify.app"/>
      <h5>Stacks</h5>
      <ol className="work-list">
          <li><span>Ruby on Rails</span></li>
          <li><span>PostgreSQL</span></li>
          <li><span>React</span></li>
      </ol>
      <LazyImg w="800px" h="800px" src="/gifs/market-survey.gif" />
      <h5>Introduction</h5>
      <p>This is a full stack teamwork project, I was responsible for building backend, creating models and providing API for front end.</p>
    </article>
  )
}