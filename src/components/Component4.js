import React, { useContext } from 'react'
import AppContext from '../Context/AppContext/AppContext'

export default function Component4(props) {
  let appContext = useContext(AppContext);

  return (
    <div>Component4 and username is {appContext.userName}</div>
  )
}
