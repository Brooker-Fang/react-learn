import React, { useReducer, memo, useState } from 'react'
function reducer (state, action ) {
  switch (action.type) {
    case 'increment': 
      return state + action.payload
    default:
      return state
  }
}
// userReducer 是另一种让函数组件保存状态的方式
export default () => {
  // userReducer是升级版的useState
  // 可以把dispatch 往下传递，避免state改变后，引起子组件的重新渲染，
  // 因为state改变，dispatch的函数不会改变
  const [count, dispatch ] = useReducer(reducer, 0)
  const [stateCount, setCount] = useState(0)
  return <div>
    <span>{count}</span>
    <button onClick={() => dispatch({type: 'increment', payload: 5})}>+</button>
    <div>{stateCount}</div>
    <button onClick={() => setCount((stateCount) => stateCount + 2)}>+</button>
    <Child setCount={setCount} dispatch={dispatch} ></Child>
  </div>
}
const Child = memo(()=>{
  console.log('child render')
  return <div>Child</div>
})