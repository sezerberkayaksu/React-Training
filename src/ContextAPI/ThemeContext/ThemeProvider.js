import {React, useState} from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider (props){
  const [_color, _setColor] = useState("yellow");
  return(
    <ThemeContext.Provider value= {{
      themeContext:{
        color: _color,
        setColor : _setColor}
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}