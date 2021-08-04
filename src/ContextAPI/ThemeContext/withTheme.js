import React from "react";
import { ThemeContext } from "./ThemeContext";

const withTheme = (WrappedComponent) =>{
  return function ThemeComponent(props){
    return(
      <ThemeContext.Consumer>
        {(contexts) => (<WrappedComponent {...props} {...contexts} />)}
      </ThemeContext.Consumer>
    );
  }
};

export default withTheme;