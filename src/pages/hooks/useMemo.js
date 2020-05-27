import React, { useState, useMemo, memo } from 'react'
function Child({ value }) {
  console.log('child render')
  return <div>value: {value}</div>
}
let MemoChild = memo(Child)
export default () => {
  console.log('parent render')
  let [name, setName] = useState('f')
  let [age, setAge] = useState(18)
  let [otherValue, setOtherValue] = useState(10)
  // 只有在 依赖项 改变时 才会重新计算值
  let val = useMemo(() => {
    return age + name
  }, [age, name])
  // 如果传入 空数组[], 则只在组件第一次 渲染时初始化，后面则不会重新计算值
  return (
    <div>
      useCallback
      <div>age: {age}</div>
      <div>
        childName: <MemoChild value={val}></MemoChild>
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
            setOtherValue(otherValue + 1)
          }}
        >
          setOtherValue
        </button>
      </div>
    </div>
  )
}
