import React from "react";
import withTheme from "./ThemeContext/withTheme";

const SetColor = props =>{
  return(
    <div>
      <div>
        <button onClick={() => props.themeContext.setColor("blue")}>Blue</button>
      </div>
      <div>
        <button onClick={() => props.themeContext.setColor("red")}>Red</button>
      </div>
    </div>
  );
}
export default withTheme(SetColor);