import React, { useState } from 'react'

export default function Events() {


    let [userDetails,setUserDetails] = useState({
        name:"",
        age:"",
        location:""
    })

    function handleFormSubmit (event){
        event.preventDefault();
        console.log("The user details are ", userDetails);
        if(userDetails.name !== "" && userDetails.age !== "" && userDetails.location !== ""){
            //process the form
        }else{
            alert("All Fields are required")
        }
    }



  return (
    <div>
       
        <form onSubmit={handleFormSubmit}>
            <input type="text"  value={userDetails.name} onChange={(event)=>{
                setUserDetails({...userDetails,name:event.target.value})
            }} placeholder="Enter your name"/>

            <input type="Text"  value={userDetails.age} onChange={(event)=>{
                         setUserDetails({...userDetails,age:event.target.value})
            }} placeholder="Enter you age"/>
            <input type="Text"  value={userDetails.location} onChange={(event)=>{
                         setUserDetails({...userDetails,location:event.target.value})
            }} placeholder="Enter you Location"/>

            <button type="submit">Submit Form</button>
        </form>


    </div>
  )
}
