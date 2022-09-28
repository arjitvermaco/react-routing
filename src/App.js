import { useContext, useState } from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import AppContext from "./Context/AppContext/AppContext";

function App() {


  let appContext = useContext(AppContext);

  console.log(appContext)
  
  return (
    <div className="body-wrapper">
      {appContext.userName}
      <button onClick={()=>{
        appContext.setUserName("Rahul Singh")
      }}>
        Click Me
      </button>
      <Component2/>

      <p>The current year is : {appContext.curentYear}</p>
    </div>
  );
}

export default App;
