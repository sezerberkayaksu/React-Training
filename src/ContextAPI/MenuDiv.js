import React from "react";
import withTheme from "./ThemeContext/withTheme";

const MenuDiv = (props) =>{
  console.log(props);
  return(
    <div style={{backgroundColor:props.themeContext.color}}>
      MENU
    </div>
  )
};

export default withTheme(MenuDiv);
