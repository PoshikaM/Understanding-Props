import React from "react";
import App from "../App";
import AppClass from "../AppClass";
import elephant from "../images/elephant.jpeg"

class DataComponent extends React.Component{
    constructor(props){
        super(props)
    }

    imageData = ()=>{
        let data = [
          {
            id:1,
            img:elephant
          },
          {
            id:2,
            img:elephant
          },
          {
            id:3,
            img:elephant
          },
          {
            id:4,
            img:elephant
          }
        ]
        return data;
      }

    render(){

        const data = this.imageData();

        return <div>
            <App name = {data}/>
            <AppClass name = {data}/>
        </div>
    }  
}

export default DataComponent;