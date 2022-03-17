import React, { useRef, useEffect, useState } from 'react'
/* 
  作用：
    0 通过 useRef 来保证任何时候访问的 ref.current 都是最新的，以解决闭包问题。
      延迟调用会存在闭包问题； 
        1、使用 setTimeout、setInterval、Promise.then 等
        2、useEffect 的卸载函数
    1 获取DOM元素对象
    2 用来保存 那些不会引起渲染的数据
*/
export default () => {
  const [count, setCount] = useState(0);
  // 解决闭包问题
  const countRef = useRef(count)
  countRef.current = count;
  // setTimeout 会造成闭包问题
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('setTimeout count ===', count);
    }, 3000);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  // setInterval 会造成闭包问题
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('setInterval count ===', count);
      console.log('setTimeout countRef ===', countRef.current);
    }, 3000);
    return () => {
      clearInterval(timer);
    }
  }, [])

  // Promise.then 会造成闭包问题
  const getUsername = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('whh');
      }, 3000);
    })
  }
  useEffect(() => {
    getUsername().then(() => {
      console.log('Promise count ===', count);
    });
  }, [])

  // useEffect 卸载函数会造成闭包问题
  useEffect(() => {
    return () => {
      console.log('unmount count ===', count);
    }
  }, []);

  return (
    <>
      Count: {count}
      <button
      onClick={() => setCount(c => c + 1)}
    >
      
      click
    </button>
    </>
    
  )
  
}