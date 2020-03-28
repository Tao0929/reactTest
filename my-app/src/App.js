import React, { Fragment, Component } from 'react'
import {
  Home,
  OtherPage
} from './page/index'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
        homeTitle: '我是首页',
        otherPageTitle: '我是其他页'
    }
  }
  handleChangeTitle = (sonValue, type) => {
    // debugger
    if (type === '1') {
      this.setState({
        homeTitle: sonValue
      })
    } else if (type === '2') {
      this.setState({
        otherPageTitle: sonValue
      })
    }
  }
  render () {
    return (
      <Fragment>
        {/* <span>点击标题修改</span> */}
        <Home handleChangeTitle={(sonValue, type)=>this.handleChangeTitle(sonValue, type)} title={this.state.homeTitle}></Home>
        <OtherPage handleChangeTitle={(sonValue, type)=>this.handleChangeTitle(sonValue, type)} title={this.state.otherPageTitle}></OtherPage>
      </Fragment>
    );
  }
}

export default App;
