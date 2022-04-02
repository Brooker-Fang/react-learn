import React from "react";

class SearchBar extends React.Component {
  render() {
    const {filterText, inStockOnly, handleChange} = this.props
    return (
      <form>
        <input type="text" value={filterText} placeholder="Search..." onChange={(e) => handleChange && handleChange(e.target.value, 'filterText')}/>
        <p>
          <input type="checkbox" value={inStockOnly} onChange={(e) => handleChange && handleChange(e.target.checked, 'inStockOnly')}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar