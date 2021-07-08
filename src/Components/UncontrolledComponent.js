import React from 'react';

class UncontrolledComponenet extends React.Component{

  constructor(props){
    super(props);
    this.input = React.createRef();
  }
  handleSubmit = (event) =>{
    alert("Submitted name is : "+ this.input.current.value);
    event.preventDefault();
  }
  render(){
    return(
      <form>
        <label>
          İsim :
          <input type="text" name = "name" ref = {this.input}/>
        </label>
        <button onClick={this.handleSubmit}>Kaydet</button>
      </form>
    );
  }
}

export default UncontrolledComponenet;