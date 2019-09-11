import React from 'react';
export const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    },
};

 // 创建一个 Context
export const ThemeContext = React.createContext(
    themes.dark // default value
);

// 创建一个hoc 将theme的value ，注入到里面的组件
export function WithTheme(Component) {
    return class extends Component{
       render(){
           const { props } = this;
           return(
               <ThemeContext.Consumer>
                   {val => <Component {...props} theme = {val}/>}
               </ThemeContext.Consumer>
           )
       }
   }
}