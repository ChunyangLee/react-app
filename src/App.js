import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudentsInfo = ()=>{

  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudentsInfo}>点我获取学生信息</button>
      </div>
    )
  }
}
