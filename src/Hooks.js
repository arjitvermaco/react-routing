import React, { useState } from "react";

export default function Hooks() {
  //useState

  // let userName = "Arjitverma";

  let [userName, setUserName] = useState("Arjit Verma");

  let [car, setCar] = useState({
    name: "Tata",
    color: "Red",
    location: "Delhi",
  });

  //Spread Operator

  function handleUserNameChange() {
    //   userName = "new username"
   setCar({...car,engine:"2000cc",year:2000})
   console.log("Updated car is ", car)
  }

  return (
    <div>
      <p>{car.color}</p>
      <p>{car.location}</p>
      <p>{car.name}</p>
      <p>{car.year}</p>
      <p>{car.engine}</p>


      <button onClick={handleUserNameChange}>Change UserName</button>
    </div>
  );
}
