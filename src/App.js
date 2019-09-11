import React,{Component} from 'react';
import { ThemeContext,themes } from "./context"
import Toolbar from "./Toolbar"
class Container extends Component{
    constructor(props){
        super(props);
        this.state ={
            theme:themes.light
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme(){
        this.setState(state =>({
            theme:state.theme === themes.dark ? themes.light:themes.dark
        }))
    }
    render(){
      // 在外层注入 theme ,里面的组件通过hoc取得 Context里的值
        return(
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        )
    }
}
 
export default  Container;

