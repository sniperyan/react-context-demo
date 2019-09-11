import ThemeButton from "./ThemeButton"
import React,{Component} from 'react';
class Toolbar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { props } = this;
        return(
            <div>
                <ThemeButton title="按我吧" />
                //这里的changeTheme处理函数从父组件传入
                <button  onClick = { props.changeTheme }>
                    别按我
                </button>
            </div>
 
 
        )
    }
}
export default Toolbar;
