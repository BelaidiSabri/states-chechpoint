import React, { Component } from 'react'
import photo from './photos/sabri.jpg'

export default class Card extends Component {
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
  
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({count:this.state.count+1})
    },1000)
  }
  render() {
    return (
      <div>
         <>
       <div className='person'>
      <img src={photo} alt='sabri'></img>
      <h2>{this.state.person.fullName}</h2>  
      <h4>{this.state.person.bio}</h4>
      <h4>{this.state.person.profession}</h4>
      <h2>time after mount:</h2>
      <h2>{`${this.state.count} sec`}</h2>
      </div>
      
      
      
      
   
      </>
      </div>
    )
  }
}
