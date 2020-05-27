import React, { Component } from 'react'

export class statePage extends Component {
  state = {
    count: 1,
    teaName: '喜茶'
  }
  upCount = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    }, () => {
      console.log(this.state)
    })
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
      teaName: '奈雪',
      age: '18'
    }, () => {
      console.log(this.state)
    })
  }
  batchSet = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  asyncSetState = async () => {
    await this.newSetState({count: this.state.count + 1 })
    console.log(this.state.count)
    await this.newSetState({count: this.state.count + 1 })
    console.log(this.state.count)
    await this.newSetState({count: this.state.count + 1 })
    console.log(this.state.count)
  }
  newSetState = (state) => {
    return new Promise((resolve, reject) => {
      this.setState(state, () => {
        resolve()
      })
    })
  }

  batchSetFn = () => {
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count)
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count)
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count)
  }
  
  render() {
    console.log('state page render')
    let { count, teaName } = this.state
    return (
      <div>
        statePage
        <div>count: {count}</div>
        <div>name: {teaName}</div>
        <button onClick={this.setCount}>点击设值</button>
        <button onClick={this.upCount}>点击+1</button>
        <button onClick={this.batchSet}>同一方法多次设值</button>
        <button onClick={this.asyncSetState}>asyncSetState</button>
        {/* <button onClick={this.batchSetFn}>多次设值2</button> */}
      </div>
    )
  }
}

export default statePage
