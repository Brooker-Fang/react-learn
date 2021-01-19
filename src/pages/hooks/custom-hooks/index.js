import { useEffect, useState } from 'react'
import axios from 'axios'
/* 
  自定义hooks其实就是逻辑和内置Hook的组合
  主要用于封装和共享逻辑
 */
const useGetUser = () => {
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => setPost(res.data))
  }, [])
  return [post, setPost]
}
const useUpdateInput = (initValue) => {
  const [value, setValue] = useState(initValue)
}
export {
  useGetUser
}