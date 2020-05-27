import React, { useState, useCallback, memo } from 'react'
function Child({ name, onClick }) {
  console.log('child render')
  return <div onClick={onClick}>{name}</div>
}
let MemoChild = memo(Child)
export default () => {
  console.log('parent render')
  let [name, setName] = useState('f')
  let [age, setAge] = useState(18)
  let setNameClick = useCallback(() => {
    console.log('setAgeClick')
    setName(name + 'h')
  }, [name])
  return (
    <div>
      useCallback
      <div>age: {age}</div>
      <div>name: {name}</div>
      <div>
        <MemoChild name={name} onClick={setNameClick}></MemoChild>
      </div>
      <div>
        <button
          onClick={() => {
            setName(name + 'h')
          }}
        >
          setName
        </button>
        <button
          onClick={() => {
            setAge(age + 1)
          }}
        >
          setAge
        </button>
      </div>
    </div>
  )
}
