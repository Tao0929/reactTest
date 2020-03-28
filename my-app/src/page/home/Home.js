import React, { Component } from 'react'
import {
    Title
} from '../../components/index'

class home extends Component {
    render() {
        return (
            <div>
               {/* <Title handleChangeTitle={this.props.handleChangeTitle} title={this.props.title}></Title> */}
               <Title type='1' handleChangeTitle={(sonValue, type)=>this.props.handleChangeTitle(sonValue, type)} title={this.props.title}></Title>
            </div>
        )
    }
}
export default home
