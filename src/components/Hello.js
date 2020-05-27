import React, {Component} from 'react'
class HelloWorldCom extends Component{
  render () {
    console.log('render')
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
export default HelloWorldCom