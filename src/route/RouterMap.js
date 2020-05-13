import Loadable from 'react-loadable';
import {Route, Switch, Redirect} from 'react-router-dom'
import React from 'react';
import MyLoadingComponent from './RouterLoading'

/**
 * @name RouteSetting
 */

// home
const AsyncHome = Loadable({
    loader: () => import('../page/home'),
    loading: MyLoadingComponent
});
// work
const AsyncWork = Loadable({
    loader: () => import('../page/work'),
    loading: MyLoadingComponent
});
// blog
const AsyncWelcome = Loadable({
    loader: () => import('../page/blog'),
    loading: MyLoadingComponent
});
// about
const AsyncAbout = Loadable({
    loader: () => import('../page/about'),
    loading: MyLoadingComponent
});

// 404
const AsyncErro = Loadable({
    loader: () => import('../page/notfind'),
    loading: MyLoadingComponent
});

export default ()=>{
  return(
    <Switch>
      <Route exact path='/' component={ AsyncHome }/>
      <Route path='/work' component={ AsyncWork }/>
      <Route path='/blog' component={ AsyncWelcome}/>
      <Route path='/about' component={ AsyncAbout}/>
      <Route path='/404' component={ AsyncErro }/>
      <Redirect to="/404"/>
    </Switch>  
  )
}