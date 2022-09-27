import { useContext, useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import AppContext from "./Context/AppContext/AppContext";

function App() {


  let appContext = useContext(AppContext);


  
  return (
    <div className="body-wrapper">
      {appContext.userName}
      <button onClick={()=>{
        appContext.setUserName("new username")
      }}>
        Click Me
      </button>
      <Component2/>
    </div>
  );
}

export default App;
