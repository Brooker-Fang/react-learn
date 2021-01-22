import React from 'react'
import { useField } from 'formik'
// 自定义表单控件
function MyInputField ({label, ...props}) {
  const [field, meta] = useField(props)
  return <div>
    <label htmlFor={props.id}>{label}</label>
    <input {...field} {...props}></input>
    { meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
}
export default MyInputField