import React from 'react';
class ComponentTitle extends React.Component{
  render(){
    return(
      <h3 className="component-title">{this.props.title}</h3>
    );
  }
}

export default ComponentTitle;