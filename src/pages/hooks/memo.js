import React, { useState, memo } from 'react'
function Child(props) {
  console.log('momo child render')
  return <div>
          <div>childName: {props.name}</div>
          <div>childAge: {props.age}</div>
        </div>
}
let MemoChild = memo(Child, () => {
  return true
})
export default () => {
  let [name, setName] = useState('f')
  let [age, setAge] = useState(18)
  let [val, setValue] = useState('val')
  let item = {
    name: name,
    age: age
  }
  return (
    <div>
      useCallback
      <div>age: {age}</div>
      <div>name: {name}</div>
      <div>val: {val}</div>
      <div>
        <MemoChild {...item}></MemoChild>
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
        <button
          onClick={() => {
            setValue(val + 1)
          }}
        >
          setValue
        </button>
      </div>
    </div>
  )
}
