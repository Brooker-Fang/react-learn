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
function Checkbox ({label, ...props}) {
  const [field, meta, helper] = useField(props)
  const { value } = meta
  const { setValue } = helper
  const handleChange = () => {
    const set = new Set(value)
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set])
  }
  console.log(field)
  return (<div>
    <label htmlFor="">
      <input type="checkbox" {...props} onChange={handleChange}></input>
      {label}
    </label>
  </div>)
}
export { MyInputField, Checkbox }