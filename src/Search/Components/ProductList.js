import React from "react";
let CategoryTitle = "";
function checkProductMatch(product, stockCheck, searchText) {
  if (searchText === "" && product.stocked === stockCheck) return true;
  else if (
    product.stocked === stockCheck &&
    searchText !== "" &&
    searchText === product.name
  )
    return true;
  else return false;
}
function ProductCategoryRow(props) {
  if (CategoryTitle !== props.category) {
    CategoryTitle = props.category;
    return (
      <tr className="category-title table-title">
        <td>{props.category}</td>
      </tr>
    );
  } else return "";
}
function ProductRow(props) {
  if (checkProductMatch(props.product, props.stockCheck, props.searchText))
    return (
      <tr>
        <td>{props.product.name}</td>
        <td>{props.product.price}</td>
      </tr>
    );
  else return "";
}
function ProductRows(props) {
  let productRowList = props.ProductList.map((product,index) => (
    <React.Fragment key={index}>
      <ProductCategoryRow category={product.category} />
      <ProductRow
        searchText={props.searchText}
        stockCheck={props.stockCheck}
        product={product}
      />
    </React.Fragment>
  ));
  return productRowList;
}
class ProductTable extends React.Component {
  render() {
    const { searchText, stockCheck } = this.props;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="table-title">Name</th>
              <th className="table-title">Price</th>
            </tr>
            <ProductRows
              searchText={searchText}
              stockCheck={stockCheck}
              ProductList={this.props.ProductList}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
