import React, {Component} from 'react'
import HelloWorldCom from '../components/Hello'
import HelloFunc from '../components/HelloFunc'
import './style.css'
import store from '../store/index'
import { addItemAction } from '../store/actionCreators'
import FilterableProductTable from './FilterableProductTable'
// import HelloCreate from '../components/HelloCreate'

class Main extends Component{
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {name: 'fhh' , age: 18},
        {name: 'whh', age: 20}
      ],
      storeList: store.getState().storeList,
      products: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    }
    // store.subscribe(this.storeChange) // 订阅Redux的状态
  }
  
  ListItem = (props) => {
    return (
      <div>{props.name}</div>
    )
  }
  click = () => {
    this.setState({
      list: [{
        name: 'a'
      }]
    })
  }

  addItem = () => {
    const value = {
      name: 'aaa',
      age: '2'
    }
    console.log(addItemAction(value))
    store.dispatch(addItemAction(value))
  }
  render () {
    let item = this.state.list[0]
    return (
      <div>
        <HelloWorldCom  {...item}/>
        <HelloFunc  {...item}></HelloFunc>
        {/* <HelloFunc name={this.state.list[0].name}></HelloFunc> */}
        
        {
          <React.Fragment>
            <span></span>
            <span></span>
          </React.Fragment>
        }
        <FilterableProductTable products={this.state.products}></FilterableProductTable>
      </div>
    )
  }
}
export default Main