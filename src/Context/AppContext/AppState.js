//We will hold all the data and values here
//Import the context
import { useState } from "react";
import AppContext from "./AppContext";


export default function AppState(props){
    let [userName,setUserName] = useState("Arjit Verma");
    let [curentYear,setCurrentYear ] = useState(2022)

    function addTwoNumbers(num1,num2){
        console.log(num1+num2);
        return (num1+num2)
    }

    return(
        <AppContext.Provider value={{
            userName,
            setUserName,
            addTwoNumbers,
            curentYear,
            setCurrentYear
        }}>
            {props.children}
        </AppContext.Provider>
    )

}