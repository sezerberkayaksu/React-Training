import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductList";
import "../Style/Table.css";
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      stockCheck: false,
    };
  }
  handleChanges = (key, value) => {
    this.setState({ [key] : value });
  };
  render() {
    return (
      <>
        <SearchBar
          searchText={this.state.searchText}
          stockCheck={this.state.stockCheck}
          onTextChanged={this.handleChanges}
          onCheckChange={this.handleChanges}
        />
        <ProductTable
          ProductList={this.props.dataList}
          searchText={this.state.searchText}
          stockCheck={this.state.stockCheck}
        />
      </>
    );
  }
}

export default FilterableProductTable;
