import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
/* 
  useEffect(() => {})   => 只传入第一个参数，则相当于 componentDidMount, componentDidUpdate
  useEffect(() => {}, []) => 第二个参数传入空数组， 则相当于 componentDidMount
  useEffect(() => () => {}) => 返回返回一个函数，则相当于componentWillUnMount
*/
export default () => {
  const [count, setCount] = useState(0)
  const setCountClick = () => {
    setCount(count + 1)
  }
  // 可以使用多个 Effects 来分离逻辑，将不相关的逻辑分成不同的 effects
  useEffect(
    () => {
      document.title = `You clicked ${count} times`
    },
    // 如果每次渲染后清理或应用 effect 可能会产生性能问题
    // 第二个参数为数组，会比较数组里的每个值  上一次渲染和下一次渲染 的值如果相同，会跳过不执行 这个effect
    // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），
    // 可以传递一个空数组[] 作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
    [count]
  )
  useEffect(() => {
    document.getElementById('button').addEventListener('click', setCountClick)
    // 返回 的函数 会在下一个effect之前 调用，即用来清除  上面代码执行的副作用
    return () => {
      console.log('remove effect')
      document.getElementById('button').removeEventListener('click', setCountClick)
    }
  })
  console.log('effect render')
  return (
    <div>
      count: {count}
      <div>
        <button id="button">count+1</button>
        <Link  to="/lifecycle">L路由跳转</Link>
      </div>
    </div>
  )
}
