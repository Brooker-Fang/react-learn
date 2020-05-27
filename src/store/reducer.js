import { ADD_ITEM } from './actionTypes'
const defaultState = {
  storeList: [
    {name: 'storeListfhh' , age: 18},
    {name: 'storeListwhh', age: 20}
  ]
}
export default (state = defaultState, action) => {
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.storeList.push(action.value)
    console.log(newState)
    return newState
  }
  return state
}