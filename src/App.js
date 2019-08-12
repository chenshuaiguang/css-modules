import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import loadable from './utility/loadable'
import style from './App.css';
// import _ from 'lodash'
// import Route1 from './route1/route1'
const Demo2 = loadable(()=>import('./demo2/demo2'))
// const Route1 = loadable(()=>import('./route1/route1'))
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:false,
      treeDataSource:[
        {
          id:1,
          children:[
            {
              id:11
            },
            {
              id:12,
              children:[
                {
                  id:121
                }
              ]
            },
          ]
      }
    ]
    }
  }
  showDemo2=()=>{
    this.setState({
      show:true
    })
  }
  createTree=(data)=>{
return  data.map(item=>{
  if(item.children){
    return (
      <li>
    {item.id}
    <ul>{this.createTree(item.children)}</ul>
      </li>
    )
  }
  return (
      <li>
    {item.id}
      </li>
    )
}
)
  }
  render(){
    return (
      <BrowserRouter>
    <div className={style.App}>
      <header className={style.header}>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          onClick={this.showDemo2}
          className={style.link}
        >
          Learn Reactwew
        </a>
        <a href="/index.html">跳转</a>
        <ul>{this.createTree(this.state.treeDataSource)}</ul>
        {this.state.show&&<>
        <Demo2 /></>}
        {/* <Switch>
                <Route path="/time" component={Route1} />
                </Switch> */}
      </header>

    </div>
    </BrowserRouter>
  )}
}

export default App;
