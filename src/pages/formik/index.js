import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import FormikPage from './form'
import FormCom from './formCom'
export default () => {
  let base = '/formik-page'
  let routers = [
    {
      title: 'form',
      routePath: '/',
      component: FormikPage,
    },
    {
      title: 'form-com',
      routePath: '/form-com',
      component: FormCom,
    },
  ]
  return (
    <div>
        <ul>
          {routers.map((item) => {
            return (
              <li key={item.title}>
                <Link to={`${base}${item.routePath}`}>{item.title}</Link>
              </li>
            )
          })}
        </ul>
        <Router>
          {routers.map((item) => {
            return <Route key={item.title} path={`${base}${item.routePath}`} exact component={item.component}></Route>
          })}
        </Router>
      </div>
  )
}
