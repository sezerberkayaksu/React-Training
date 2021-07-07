import React from 'react';
const scaleTypes ={
  c : "Santigrat",
  f : "Fahrenyt"
};
function BoilingVerdict(props){
    if(props.celsius)
      return <p>Su kaynar.</p>
    else
      return <p>Su kaynamaz.</p>
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class TemperatureInput extends React.Component{
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    const {temperature ,scale} = this.props;
    return(
      <fieldset>
        <legend>{scaleTypes[scale]} cinsinden sıcaklık girin:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );  
  }
} 
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      temperature : '',
      scale : 'c'
    };
  }
  handleCelsiusChange = (temperature) =>{
    this.setState({temperature , scale : 'c'});
  }
  handleFahrenitChange = (temperature)=>{
    this.setState({temperature , scale : 'f'});
  }
  render(){
    const {temperature , scale } = this.state;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return(
      <>
        <TemperatureInput 
          scale = "c" 
          temperature = {celsius}
          onTemperatureChange = {this.handleCelsiusChange}/>
        <TemperatureInput 
          scale = "f" 
          temperature = {fahrenheit}
          onTemperatureChange = {this.handleFahrenitChange}/>
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </>
    );
  }
  
    
}

export default Calculator;