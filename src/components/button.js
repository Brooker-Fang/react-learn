import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ButtonCom extends Component {
  render() {
    let { text } = this.props
    return (
      <button>{text}</button>
    )
  }
}
export default ButtonCom
ButtonCom.defaultProps = {
  text: '默认值'
}
ButtonCom.propTypes = {
  text: PropTypes.string
}
