import React, { Component } from "react";
import "./App.css";
import Searching from "./components/Searching";
import Trending from "./components/Trending";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      tGiphys: null,
      sGiphys: null,
      loading: true
    };
  }



  render(){
    return (
    <div>
        <div>
          <Searching />
        </div>
        <div>
          <Trending />
        </div>
      </div>
    )
  }
}

export default App;
