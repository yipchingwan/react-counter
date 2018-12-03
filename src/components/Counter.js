import React, { Component } from 'react'

export default class Counter extends Component {
    state = {number : 0}
    add = ()=>{
        this.props.OnUpdate(1)
        this.setState({number:this.state.number+1})
    }
    sub = ()=>{
        this.props.OnUpdate(-1)
        this.setState({number:this.state.number-1})
    }
    render() {
      return (
        <div>
          <button onClick={this.add}>+</button>
          {this.state.number}
          <button onClick={this.sub}>-</button>
          
        </div>
      );
    }
}
