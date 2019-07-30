import React from 'react'
import style from  './demo1.less'
// import _ from 'lodash'
class Demo1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(style)
        return (
            <div className={style.box}>
                我是demo1
                <div className={style['box-a']}>
                    aaaa
                    <div className={style['box-a-b']}>
                        ddddd
                    </div>
                    <div className={style['box-a-c']}>
                        cccc
                    </div>
                    <div className={style['box-a-d']}>
                        dddd
                    </div>
                    <img width="100" height="100" src={require('../images/red.png')} />
                    <img width="100" height="100" src={require('../images/eye.png')} />
                </div>
            </div>
        )
    }
}
export default Demo1