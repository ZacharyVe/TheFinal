import React from 'react';
import Child from './Child';


class Parent extends React.Component {

  constructor(props){
    super();
    this.state = {
                  name: "(Write Your Name)",
                }
// Bind functions inside the constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

// revert to a name
  handleClick() {
    this.setState({
      name:"Zach",
    })
  }
// change event for text box
  handleChange(event) {
    const text = event.target.value;
    this.setState({
      name:text,
    });
  }

  render(){
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child 
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Parent