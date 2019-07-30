import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import loadable from './utility/loadable'
class Copy extends React.Component {
  constructor(props){
    super(props)
    this.state={
      show:false
    }
  }
  showDemo2=()=>{
    this.setState({
      show:true
    })
  }
  render(){
    return (
     <div>
         <a href="/main/main.html">我是copy</a>
         </div>
  )}
}

export default Copy;
