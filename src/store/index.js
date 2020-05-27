
import { createStore } from 'redux' // 引入 createStore方法
import reducer from './reducer' // 引入reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使浏览器中redux-devtool插件生效
) // 创建数据存储仓库
export default store // 将仓库暴露出去