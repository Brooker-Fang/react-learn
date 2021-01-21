import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // 自定义验证
    /* validate: values => {
      const errors = {}
      if (!values.username) errors.username = '请输入用户名'
      if (values.password.length < 3) {
        errors.password = '密码长度不能小于3'
      }
      return errors
    }, */
    // 验证规则
    validationSchema: Yup.object({
      username: Yup.string().max(5, '用户名长度不能大于5').required('请填写用户名'),
      password: Yup.string().min(6, '密码长度不能小于6'),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
       type="text" 
       name="username" 
       value={formik.values.username} 
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}></input>
      {/* formik.touched 检验元素是否被修改过 */}
      {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}
      {/* 用{...formik.getFieldProps('password')}简化代码 */}
      <input 
        type="text" 
        name="password" 
        {...formik.getFieldProps('password')}></input>
      {formik.errors.password && <div>{formik.errors.password}</div>}
      <input type="submit"></input>
    </form>
  )
}
