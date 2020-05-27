import React, { useState } from 'react'

function useStateCom() {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({name: 'fhh'})
  function getInitialValue() {
    return `${count}+1`
  }
  const [buttonText] = useState(getInitialValue())
  console.log(useState(0))
  console.log('render')
  return (
    <div>
      count: {count}
      <div>
        <button onClick={() => setCount(count + 1)}>{buttonText}</button>
  <button onClick={() => setObj(obj)}>name:{obj.name},age:{obj.age}</button>
      </div>
    </div>
  )
}

export default useStateCom
