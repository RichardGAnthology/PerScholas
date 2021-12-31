import React, { Component } from "react";

class GroceryList extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.userInput}>
          <label> Item: </label>
          <input
            type="text"
            value={this.props.newItem}
            onChange={this.props.changeNewGroceryItemName}
          />

          <label> Units: </label>
          <input
            type="text"
            value={this.props.newUnits}
            onChange={this.props.changeNewGroceryUnitsName}
          />

          <label>Quantity: </label>
          <input
            type="text"
            value={this.props.newQuantity}
            onChange={this.props.changeNewGroceryQuantityName}
          />
        </form>
      </div>
    );
  }
}

export default GroceryList;
