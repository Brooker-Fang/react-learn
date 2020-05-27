import React, {lazy, Suspense} from 'react'
import './App.css'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import Main from './pages/main'
// import LifeCycle from './pages/lifecycle'
// import JsxPage from './pages/jsx'
// import StatePage from './pages/state'
// import PropsPage from './pages/propsPage'
// import HooksPage from './pages/hooks'
const Main = lazy(() => import('./pages/main'));
const LifeCycle = lazy(() => import('./pages/lifecycle'));
const JsxPage = lazy(() => import('./pages/jsx'));
const StatePage = lazy(() => import('./pages/state'));
const PropsPage = lazy(() => import('./pages/propsPage'));
const HooksPage = lazy(() => import('./pages/hooks'));
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/lifecycle">生命周期</Link>
        </li>
        <li>
          <Link to="/jsx-page">JSX</Link>
        </li>
        <li>
          <Link to="/state-page">state</Link>
        </li>
        <li>
          <Link to="/props-page">props</Link>
        </li>
        <li>
          <Link to="/hooks-page">Hooks</Link>
        </li>
      </ul>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/lifecycle" component={LifeCycle}></Route>
          <Route path="/jsx-page" component={JsxPage}></Route>
          <Route path="/state-page" component={StatePage}></Route>
          <Route path="/props-page" component={PropsPage}></Route>
          <Route path="/hooks-page" component={HooksPage}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
