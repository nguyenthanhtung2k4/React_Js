import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Paragragh from "./Paragraph";


const App = () => {
 const  context= useContext(ThemeContext);
  return (
    <div>
      <button  onClick={context.toggleColor}>buttong
      </button>
      <Paragragh/>
    </div>
  )
};

export default App;
