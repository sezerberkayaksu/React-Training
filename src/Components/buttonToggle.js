import React from 'react';
class ToggleButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {toggle : true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState( prevState =>({
            toggle : !prevState.toggle
        }));
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.toggle? 'ON':'OFF'}
            </button>
        );
    }
}
export default ToggleButton;