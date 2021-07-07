import React from "react";
function TypeList(props){
  return (
    <select value ={props.currentValue} onChange={props.onChange}>
      {props.dizi.map((tip)=>
        <option value = {tip}>{tip}</option>
      )}
    </select>
  );
}
class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameText: "",
      type : "Text"
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.renderSwitch     = this.renderSwitch.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      nameText: event.target.value,
    });
  }
  handleTypeChange(event){
      this.setState({
        type : event.target.value
      });
  }
  renderSwitch(){
    switch (this.state.type){
      case "Text":
        return(
        <label>
          Name:
          <input type="text" name="name" value={this.state.nameText} onChange={this.handleNameChange} />
        </label>
        );
      case "Textarea":
        return(
        <label>
          Name:
          <textarea name="name" value={this.state.nameText} onChange={this.handleNameChange} />
        </label>
        );
      default:
        return <div>Boş</div>;
    }
  }
  handleFormSubmit(event) {
    alert("Submitted Name :" + this.state.nameText);
    event.preventDefault();
  }
  render() {
    return (
      <form>
        <label>
            Type:
            <TypeList dizi={['Text','Textarea','Boş']} currentValue = {this.state.type} onChange={this.handleTypeChange}/>
        </label>
        {this.renderSwitch()}
        <input type="submit" value="Submit" onClick={this.handleFormSubmit}/>
      </form>
    );
  }
}

export default ExampleForm;
