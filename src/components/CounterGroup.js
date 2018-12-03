import React, { Component } from 'react'
import Counter from './Counter.js'

export default class CounterGroup extends Component {
    state = {sum : 0, sizeArray : new Array(this.props.size).fill(0)}
    clickUpdate = (number)=>{
        this.setState({sum : this.state.sum+number});
    }
    render() {
      return (
        <div>
            {this.state.sizeArray.map(()=>( <Counter OnUpdate={this.clickUpdate}/>))}
            <span>{this.state.sum}</span>   
        </div>
      );
    }
}
