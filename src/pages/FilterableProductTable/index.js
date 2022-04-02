
import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }
  handleChange = (value, key) => {
    console.log(value, key)
    this.setState((prev) => ({
      ...prev,
      [key]: value
    }))
  }
  render() {
    const {filterText, inStockOnly} = this.state
    return (
      <div>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} handleChange={this.handleChange}></SearchBar>
        <ProductTable products={this.props.products} filterText={filterText} inStockOnly={inStockOnly} handleChange={this.handleChange}></ProductTable>
      </div>
    )
  }
}
export default FilterableProductTable