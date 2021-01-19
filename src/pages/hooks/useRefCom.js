import React, { useRef, useEffect, useState } from 'react'
/* 
  作用：
    1 获取DOM元素对象
    2 用来保存 那些不会引起渲染的数据
*/
export default () => {
  const [count, setCount] = useState(0)
  const userNameInput = useRef()
  let timer = useRef()
  useEffect(() => {
    // 保存于ref的current属性
    console.log(userNameInput.current)
  }, [])
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])
  const stopTimer = () => {
    clearInterval(timer.current)
  }
  return <div>
    <input ref={userNameInput}></input>
    <div>{count}</div>
    <button onClick={stopTimer}>清除定时</button>
  </div>
  
}