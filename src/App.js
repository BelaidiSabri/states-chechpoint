import './App.css';
import photo from './photos/sabri.jpg'
import React, { Component} from 'react'

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
  componentDidMount(){
    setInterval(()=>{
      this.setState({count:this.state.count+1})
    },1000)
  }

  render() {
    return (
      <>
      {this.state.show? <div className='person'>
      <img src={photo} alt='sabri'></img>
      <h2>{this.state.person.fullName}</h2>  
      <h4>{this.state.person.bio}</h4>
      <h4>{this.state.person.profession}</h4>
      </div>:null}
      
      
      <button onClick={this.change} style={this.state.show? {backgroundColor:'#f44336'}:{backgroundColor:'#4CAF50'}}>{this.state.show? "hide":"show" }</button>
      <br></br>
      <h2>time after mount:</h2>
      <h2>{`${this.state.count} sec`}</h2>
      
   
      </>
    )
  }
}
