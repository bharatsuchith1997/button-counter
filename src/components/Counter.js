import React from 'react'
import Controllers from "./Controllers"

import {useSelector} from 'react-redux'

const Counter = () => {
  const count = useSelector(state => state.count)
  return (
    <div>
      <h1>{count}</h1>
      <Controllers />
    </div>
  )
}

export default Counter