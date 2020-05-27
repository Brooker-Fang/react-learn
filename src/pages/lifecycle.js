import React, { Component, memo } from 'react'
function Child({ name, onClick }) {
  console.log('child render')
  return <div onClick={onClick}>{name}</div>
}
let MemoChild = memo(Child)
export class LifeCycle extends Component {
  constructor(props) {
    super(props)
    // this.handlerClick = this.handlerClick.bind(this)
    console.log('constructor')
    this.state = {
      count: 1,
      name: 'hh',
    }
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  handlerClick = () => {
    console.log('click')
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    console.log('render')
    let { count, name } = this.state
    return (
      <div>
        LifeCycle
        <div>count: {count}</div>
        <MemoChild onClick={this.handlerClick} name={name}></MemoChild>
      </div>
    )
  }
}

export default LifeCycle
