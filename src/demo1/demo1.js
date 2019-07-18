import React from 'react'
import style from  './demo1.less'
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
                </div>
            </div>
            // <div className="box">
            //     <div className="son">
            //     wewwe
            //     </div>
            //     </div>
        )
    }
}
export default Demo1