import React, { Component } from 'react'

export class jsxPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {name: 'fhh' , age: 18},
        {name: 'whh', age: 20}
      ],
      isShow: false
    }
  }
  getList = () => {
    return (
      <ul>
        <li>列表1</li>
        <li>列表2</li>
      </ul>
    )
  }
  click = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    let name = 'fhh'
    let nameElement = <span>{name}</span>
    let isShow = this.state.isShow
    return (
      <div style={{padding: '20px'}}>
        jsxPage
        <div>{name}</div>
        <div>{nameElement}</div>
        {this.getList()}
        <div>
          <button 
            className={"a b"} 
            onClick={this.click} 
            style={{fontSize: '15px'}}>
              点击
          </button>
        </div>
        <div>
          列表渲染
          {
            this.state.list.map((item) => {
              return (
                <div key={item.name}>{item.name}很帅</div>
              )
            })
          }
        </div>
        <div>
          {
            isShow ? (
              <div>显示</div>
            ) : (
              <div>隐藏</div>
            )
          }
        </div>
      </div>
    )
  }
}

export default jsxPage
