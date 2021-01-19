import React from 'react'
import { useGetUser } from './custom-hooks'
export default () => {
  const [post] = useGetUser()
  return <div>{post.title}</div>
}