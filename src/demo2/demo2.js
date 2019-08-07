import React from 'react'
import _ from 'lodash'
import './demo2.css'
// import Demo1 from '../demo1/demo1'
class Demo2 extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let arr = []
        arr = [1,23,4,5,566].map(item=>{
            return item
        })
        console.log(arr)
    }
    render(){
        return (
            <>
            <div>
               我是demo2
               {/* <Demo1 /> */}
            </div>
            <img width="100" height="100" src={require('../images/red.png')} />
            </>
        )
    }
}
export default Demo2