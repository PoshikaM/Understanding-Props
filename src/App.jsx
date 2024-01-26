import './App.css';
import elephant from "./images/elephant.jpeg";

function App(props){
  const data = props.name;

  return <div>
  <h1 className='title'>Kalvium gallary</h1>
  <div className='content'>
    {
      data.map((element, index) => {
        return <div key={element.id}>
          <img src={element.img}/>
        </div>
      })
    }
  </div>
  </div>
}

export default App;