import React from 'react'
import LazyImg from '@c/lazyImg'
import Prism from 'prismjs'
import PopLink from '@c/poplink'
const blog = 'http://cdn.toofook.com/my-blog/work/myblog.jpg'

const text = {
  create:`    {
    test: /\.scss$/,
    use: [
        ...
        require.resolve(paths.appNodeModules + '/sass-loader'), // sass-loader
        ...
    ]
    },`,
    root:`    import Loadable from 'react-loadable'; 
    // put babel-plugin-syntax-dynamic-import to plugs in babel-loader
    ...
    // use loadable
    const AsyncHome = Loadable({
        loader: () => import('./page/home/page'),
        loading: MyLoadingComponent
    })
    ...`,
    link:`    this.setHistory = setTimeout(()=>{
      history.push(herf)
    },1000) `,
    com:`   this.node = doc.createElement('div');
    doc.body.appendChild(this.node);
    ...
    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }
    ...
    render() {
        return createPortal(
        <div className="dialog">
            <div className="dialog-bg"></div>
            {this.props.children}
        </div>,
        this.node 
        );
    }`
}

const creatHtml = Prism.highlight(text.create,Prism.languages.javascript, 'javascript')
const rootHtml = Prism.highlight(text.root,Prism.languages.javascript, 'javascript')
const linkHtml = Prism.highlight(text.link,Prism.languages.javascript, 'javascript')
const comHtml = Prism.highlight(text.com,Prism.languages.javascript, 'javascript')
export default ()=> {
  return(
    <article className="work-pop-main work-pop-code">
      <h1>My Personal Blog</h1>
      <p>React Blog</p>
      <p>Use create-react-app skyfold. Configuration of eject,webpack is in node_modules/react-script/config</p>
      <pre className="language-javascript" dangerouslySetInnerHTML={{__html:creatHtml}}></pre>
      <h5>Router</h5>
      <p>Use react-router it is not difficult if follow react document；Dynamically load any module before rendering it into app by using react-loadable. But with loadable, cannot use react-transform-group to make animation.</p>
      <pre className="language-javascript" dangerouslySetInnerHTML={{__html:rootHtml}}></pre>
      <p style={{marginTop:'1.6rem'}}>So invoke animation when component loaded and unloaded. And cannot use Link component because we need route after animation is done.</p>
      <p>Logic of front end router is listening hashchange, so set a timer and push relative value to history once animation finished.</p>
      <pre className="language-javascript" dangerouslySetInnerHTML={{__html:linkHtml}}></pre>
      <h5>Component</h5>
      <p>I really like react component, here is a breif introduction of how realise popup window</p>
      <p>Most of time the popup window is taken out of dom and append to the bottom of body (z-index only works for sibling dom element), it costs a lot if we change dom directly and virtual dom may cause unexpected results. So need to use createPortal here (remove created element when component unloaded)</p>
      <pre className="language-javascript" dangerouslySetInnerHTML={{__html:comHtml}}></pre>
      {/* <p style={{marginTop:'1.6rem'}}>完整代码：</p> */}
    </article>
  )
}