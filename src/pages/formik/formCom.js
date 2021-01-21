import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default () => {
  const initialValues = {
    username: '',
    content: '',
    subject: ''
  }
  const handleSubmit = (values) => {
    console.log(values)
  }
  const schema = Yup.object({
    username: Yup.string().max(5, '用户名长度不能大于5').required('请填写用户名'),
    password: Yup.string().min(6, '密码长度不能小于6'),
  })
  return (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={schema}
    >
      <Form>
        <Field className="text-red-500 text-xs italic"  placeholder="username" name="username"></Field>
        <ErrorMessage component="div" className="text-red-500 text-xs italic" name="username"></ErrorMessage>
        {/* as 为input类型 */}
        <Field as="textarea" name="context" ></Field>
        <Field as="select" name="subject" >
          <option value="a">前端</option>
          <option value="b">后端</option>
        </Field>
        <input type="submit"></input>
      </Form>
  </Formik>
  )
}