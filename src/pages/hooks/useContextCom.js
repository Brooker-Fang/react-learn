import React, { createContext, useContext} from 'react'
const countContext = createContext()
// useContext 主要是在跨组件层级获取数据时简化获取数据的代码
export default () => {
  return <countContext.Provider value={100}>
    <Child></Child>
  </countContext.Provider>
}
function Child() {
  return <div>
    Child
    <ChildTwo></ChildTwo>
    <ChildThree></ChildThree>
    <ChildClass></ChildClass>
  </div>
}
function ChildTwo(){
  const count = useContext(countContext)
  return <div>
    ChildTwo{count}
  </div>
}
// 不使用useContext
function ChildThree () {
  return <countContext.Consumer>
    {
      value => {
        return <div>
        ChildThree{value}
      </div>
      }
    }
  </countContext.Consumer>
}
// 类组件可以使用静态属性classType接收context对象，但只能订阅单一的context
class ChildClass extends React.Component{
  static contextType = countContext;
  render() {
    return <div>
    ChildClass{this.context}
  </div>
  }
}