import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import useStateCom from './useStateCom'
import useEffectCom from './useEffectCom'
import memoCom from './memo'
import useCallbackCom from './useCallback'
import useMemoCom from './useMemo'
import useReducerCom from './useReducerCom'
import useContextCom from './useContextCom'
import useRefCom from './useRefCom'
export class HooksCom extends Component {
  render() {
    let base = '/hooks-page'
    let routers = [
      {
        title: 'useState',
        routePath: '/use-state',
        component: useStateCom,
      },
      {
        title: 'useEffect',
        routePath: '/use-effect',
        component: useEffectCom,
      },
      {
        title: 'memo',
        routePath: '/memo',
        component: memoCom,
      },
      {
        title: 'useCallback',
        routePath: '/use-callback',
        component: useCallbackCom,
      },
      {
        title: 'useMemo',
        routePath: '/use-memo',
        component: useMemoCom,
      },
      {
        title: 'useReducer',
        routePath: '/use-reducer',
        component: useReducerCom,
      },
      {
        title: 'useContext',
        routePath: '/use-context',
        component: useContextCom,
      },
      {
        title: 'useRef',
        routePath: '/use-ref',
        component: useRefCom,
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
}

export default HooksCom
