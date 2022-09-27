import React, { useContext } from 'react'
import AppContext from '../Context/AppContext/AppContext'
import Component4 from './Component4'

export default function Component2() {

  let appContext = useContext(AppContext);

  return (
    <div>
       Username from component 2 is : {appContext.userName}
        <Component4/>
    </div>
  )
}