import React, { Component } from 'react'
import {
    Title
} from '../../components/index'

export default class otherPage extends Component {
    render() {
        return (
            <div>
                {/* <Title handleChangeTitle={this.props.handleChangeTitle} title={this.props.title}></Title> */}
                <Title type='2' handleChangeTitle={(sonValue, type)=>this.props.handleChangeTitle(sonValue, type)} title={this.props.title}></Title>
            </div>
        )
    }
}
