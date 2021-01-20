import React from 'react'
import { useGetUser, useUpdateInput } from './custom-hooks'
export default () => {
  const [post] = useGetUser()
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')
  const submitForm = e => {
    e.preventDefault()
    console.log(usernameInput.value, passwordInput.value)
  }
  return <div>
      <div>{post.title}</div>
      <form onSubmit={submitForm}>
        <input type="text" name="username" value={usernameInput.value} onChange={usernameInput.onChange} ></input>
        <input type="text" name="password" {...passwordInput}></input>
        <input type="submit"></input>
      </form>
    </div>
}