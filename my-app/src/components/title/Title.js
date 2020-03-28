import React, { Component } from 'react'

class title extends Component {
    constructor (props) {
        super (props)
        this.state = {
            isShowInput: false,
            dispaly: 'none'
        }
    }
    handleShowChangeTitle =  () => {
        this.setState(prevState => ({
            isShowInput: !prevState.isShowInput,
            display: prevState.isShowInput ? 'block': 'none'
            })
        );
    }
    handleChangeTitle = (e) => {
        console.log(e.currentTarget.value)
        // debugger
        // console.log(this.props)
        this.props.handleChangeTitle(e.currentTarget.value,this.props.type)
        // 将 textValue传给父元素
    }
    render() {
        return (
            <div>
                <h2 onClick={this.handleShowChangeTitle}>{this.props.title}</h2>
                <input type="text" onChange={this.handleChangeTitle} value={this.props.title}  style={{display: this.state.isShowInput?'block':'none'}} />
            </div>
        )
    }
}
export default title


// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isToggleOn: true,
//         dispaly: 'block'
//       };

//       // 这个绑定是必要的，使`this`在回调中起作用
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn,
//         display: prevState.isToggleOn ? 'none': 'block'
//       }));
//     }

//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'ON' : 'OFF'}
//           </button>
//           <div className="m-test" style={{display: this.state.display}}></div>
//         </div>
//       );
//     }
//   }