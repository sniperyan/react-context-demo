import React,{Component} from 'react';
import {WithTheme} from './context';

class ThemeButton extends Component{
    constructor(props){
        super(props);
        this.title = "button component"
    }
    render(){
        const {props} = this;
 
        return(
            <div>
                <button style={{color:props.theme.foreground,background:props.theme.background}}>{props.title}</button>
            </div>
        )
    }
}
//WithTheme就是上面定义的高阶组件  通过 hoc取得Context里的value
export default WithTheme(ThemeButton);
