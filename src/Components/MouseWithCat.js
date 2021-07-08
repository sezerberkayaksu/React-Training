import React from 'react'
class Cat extends React.Component{
  render(){
    const {positions} = this.props; 
    return(
      <div> Position Values {positions.x} and {positions.y} </div>
    );
  }
}
class Mouse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x : '',
      y: ''
    };
  }
  handleMouseMove = (e)=>{
    this.setState({
      x : e.clientX,
      y : e.clientY
    });
  }
  render(){
    return(
      <>
      <div style={{height:"100vh"}} onMouseMove={this.handleMouseMove}></div>
      {this.props.render(this.state)}
      </>
    );
  }
}
class MouseWithCat extends React.Component{
  render(){
    return(
        <Mouse render = { (positions)=>(
          <Cat positions = {positions}/>
        )} />
    );
  }
}
export default MouseWithCat;