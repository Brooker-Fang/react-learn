import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default () => {
  const initialValues = {}
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
        <Field name="username"></Field>
        <ErrorMessage name="username"></ErrorMessage>
      </Form>
  </Formik>
  )
}