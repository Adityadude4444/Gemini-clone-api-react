import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [prop, setprop] = useState("");
  const [recentprop, setrecentprop] = useState("");
  const [prevprop, setprevprop] = useState([]);
  const [result, setresult] = useState("");
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);

  const formatResult = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };
  const alreadyloaded = async (prompt) => {
      const response = await run(prompt);
      const formattedResult = formatResult(response);
      setshowresult(true)
      setresult(formattedResult);
      
  }


  const onSent = async (prompt) => {
    if (!prompt.trim()) return;

    setloading(true);
    setresult("");
    setshowresult(true);
    setrecentprop(prop);
    setprevprop(prev=>[...prev,prop])

    try {
      const response = await run(prompt);
      const formattedResult = formatResult(response);
      setresult(formattedResult);
      console.log(prevprop)

    } catch (error) {
      console.error(error);
      setresult("An error occurred.");
      setshowresult(true);
    } finally {
      setloading(false);
      setprop(""); 
    }
  };

  const contextValue = {
    prop,
    setprop,
    result,
    setresult,
    recentprop,
    setrecentprop,
    prevprop,
    setprevprop,
    showresult,
    loading,
    onSent,
    alreadyloaded,setshowresult
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
