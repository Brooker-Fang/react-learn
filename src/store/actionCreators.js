import { ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'

export const addItemAction = (value) => ({
  type: ADD_ITEM,
  value
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})