import React, { Component } from 'react'

export class Reaction extends Component {
  constructor(props){
    super(props);
    this.state={
      increment_count:0,
      discrement_count:0
    }
  }
  handleIncrement(){
    this.setState({
      increment_count: this.state.increment_count+1
    });
  }
  handlediscrement() {
    this.setState({
      discrement_count: this.state.discrement_count + 1
    });
  }
  render() {
    
    return (

      <div >
        <div></div>
        <button className="btn waves-effect waves-light " onClick={() => this.handleIncrement()} name="action">{this.state.increment_count}<i className="material-icons right">add</i>
        </button> 
        <button className="btn waves-effect waves-light " onClick={() => this.handlediscrement()} name="action">{this.state.discrement_count}<i className="material-icons right">minimize</i>
        </button>
        
       
 
      </div>
    )
  }
}

export default Reaction
