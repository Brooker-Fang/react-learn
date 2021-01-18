import React, {Component} from 'react'
import HelloWorldCom from '../components/Hello'
import HelloFunc from '../components/HelloFunc'
import './style.css'
import store from '../store/index'
import { addItemAction } from '../store/actionCreators'
// import HelloCreate from '../components/HelloCreate'

class Main extends Component{
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {name: 'fhh' , age: 18},
        {name: 'whh', age: 20}
      ],
      storeList: store.getState().storeList
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
      </div>
    )
  }
}
export default Main