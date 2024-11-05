
import React, {Component} from "react";
class App extends Component{
constructor(props){
  super(props)
  this.inputName=React.createRef()
  this.inputAge=React.createRef()
}
handleSubmit=(e)=>{
  e.preventDefault()
  console.log(this.inputName.value);
  console.log(this.inputAge.value);
  
  
  
}
render(){
  return <div>
    <form action="">
      <input type="text" placeholder="name" ref={input=>this.inputName=input}/>
      <input type="text" placeholder="age" ref={input=>this.inputAge=input}/>
     
      <button onClick={this.handleSubmit}>submit</button>
    </form>
  </div>
}

}
export default App