import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  constructor(props){
    super(props)
  }
  // code here
  render(){

    const {name} = this.props;

    return <div>
      <h1 className="title">Kalvium gallary</h1>
      <div className="content">
        {
          name.map((element, index) => {
            return <div key={element.id}>
              <img src={element.img} alt="" />
            </div>
          })
        }
      </div>
    </div>
  }
}