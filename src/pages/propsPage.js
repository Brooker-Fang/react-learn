import React, { Component } from 'react'
import ButtonCom from '../components/button'

export class PropsPage extends Component {
  render() {
    return (
      <div>
        父组件PropsPage
        <div>
          <ButtonCom text="父组件传值"></ButtonCom>
          <ButtonCom ></ButtonCom>
        </div>
      </div>
    )
  }
}

export default PropsPage
