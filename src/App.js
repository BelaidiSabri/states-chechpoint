import './App.css';
import React, { Component} from 'react'
import Card from './Card';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {person:{
      fullName:"Belaidi sabri",
      bio:"28 years old",
      profession:"Developer",
      img:"photo",
    },
    show:true,
    count:0
  }
  this.change=this.change.bind(this)
  
  }
  
  change() {
    this.setState({show:!this.state.show})
  }


  render() {
    return (
      <>
     {this.state.show? <Card></Card> : null}
     <button onClick={this.change} style={this.state.show? {backgroundColor:'#f44336'}:{backgroundColor:'#4CAF50'}}>{this.state.show? "hide":"show" }</button>
      <br></br>
      
      </>
    )
  }
}
