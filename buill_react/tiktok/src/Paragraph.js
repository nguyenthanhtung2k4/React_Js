import { useContext, useImperativeHandle } from "react";
import { ThemeContext } from "./ThemeContext";


function Paragragh(){
      const   theme =  useContext(ThemeContext);
      const t=  useImperativeHandle
      return(
      
            <p className={theme.color}>
                  text o day  nhe e
            </p>

      
      )
}

export  default  Paragragh ;