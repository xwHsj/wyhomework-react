import React, { Component } from 'react';
import confirm from '../components/Confirm.js'

class InputNumber extends Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
               TestConfirm
            </div>
        );
    }
    async componentDidMount(){
        let res = await confirm("确定删除吗")
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
    componentDidUpdate() {
        console.log('update defaultValue',this.state.defaultValue)
    }
    componentWillUnmount() {
    }
 
}
export default InputNumber
