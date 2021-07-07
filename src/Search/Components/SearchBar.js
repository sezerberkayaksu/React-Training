import React from "react";
class SearchBar extends React.Component {
  handleTextChange = (e) => {
    this.props.onTextChanged(e.target.name, e.target.value);
  };
  handleCheckChange = (e) => {
    this.props.onCheckChange(e.target.name, e.target.checked);
  };
  render() {
    return (
      <div>
        <form>
          <label>
            <input
              type="text"
              name="searchText"
              placeholder="Arama"
              value = {this.props.searchText}
              onChange={this.handleTextChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="stockCheck"
              value = {this.props.stockCheck}
              onChange={this.handleCheckChange}
            />
            Stok Kontrolü
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
