import React from 'react'

// Child contains button and text box with props passing functions

class Child extends React.Component {
  render(){
    return (
        <div className="container">  
            <button 
              onClick={this.props.onClick} 
              value="Revert" 
              className="btn btn-primary"
            />
            <input 
              type="text" 
              placeholder="Please Enter Your Name" 
              onChange={this.props.onChange} 
            />
        </div>
    )
  }
} 

export default Child