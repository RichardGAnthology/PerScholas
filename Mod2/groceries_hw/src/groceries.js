import React, {Component} from 'react'
import GroceryList from './grocerylist'

class Groceries extends Component{
    constructor(props){
        super(props)

        this.state={
            grocery: [
                {item: 'grapes', units: '5', quantity: 46, isPurchased: true},
                {item: 'apples', units: '3', quantity: 3, isPurchased: true},
                {item: 'watermelons', units: '2', quantity: 20, isPurchased: true},
                
            ],
            newItem: "", 
            newUnits: "",
            newQuantity: "",
            isPurchased:""
        }

        //in order to reference the method...look this up 
        this.changeNewGroceryItemName = this.changeNewGroceryItemName.bind(this)
        this.changeNewGroceryUnitsName = this.changeNewGroceryUnitsName.bind(this)
        this.changeNewGroceryQuantityName = this.changeNewGroceryQuantityName.bind(this)
        this.submittedInput = this.submittedInput.bind(this)
        this.removeItem = this.removeItem.bind(this)
 
    }
    changeNewGroceryItemName(event){
        this.setState({newItem: event.target.value})
    }
    changeNewGroceryUnitsName(event){
        this.setState({newUnits: event.target.value})
    }
    changeNewGroceryQuantityName(event){
        this.setState({newQuantity: event.target.value})
    }

    submittedInput(){
        const currentGroceryList = this.state.grocery.slice()
        
        let newItems = {
            item: this.state.newItem,
            units: this.state.newUnits,
            quantity: this.state.newQuantity,
            isPurchased: true,
            
        }
        currentGroceryList.push(newItems)
        
        //updating the state of grocery to the new "grocery" which has the inputted(pushed) items
        this.setState({grocery: currentGroceryList})
    }

    removeItem(event){  
      //currentGroceryList is an exact copy of the current array in the state
      const currentGroceryList = this.state.grocery.slice()
    
      //index is equal to the id of the p tag and which is also equal to the index of the array
      const index = event.target.parentNode.id

      //temp is equal to the entire item within the array at that index location(the button pressed is that item)
      const temp = this.state.grocery[index] 
      console.log(this.state.grocery[index]) 
    
      //tempisPurchased is equal to the key of that object and toggling it to the opposite of what it is
      temp.isPurchased = !temp.isPurchased
      
      //this is replacing the entire item of the array at the same index at temp with the new Key/Value of isPurchased
     currentGroceryList[index] = temp 
     console.log(currentGroceryList[index])
     
     this.setState({grocery: currentGroceryList})
    }

    render(){
        return(
            <div> 
                <div className="gridContainer">
                <div className= "groceriesContainer">
                    <div className = "groceries">
                        <h2>Grocery Purchased</h2>
                        {this.state.grocery.map((g) => {
                            if (g.isPurchased){
                                //key helps computer keep order
                                return <p id={this.state.grocery.indexOf(g)} key={this.state.grocery.indexOf(g)} > Item: {g.item} Units: {g.units} Quantity: {g.quantity} <button onClick={this.removeItem}> Remove </button> </p>
                                }
                            })} 
                    </div>
                </div>
                
                <div className= "newGroceries">
                   <h2>Grocery to Purchase</h2>
                    <GroceryList
                        newItem={this.state.newItem} newUnit = {this.state.newUnits} newQuantity = {this.state.newQuantity}
                        changeNewGroceryItemName={this.changeNewGroceryItemName} changeNewGroceryUnitsName={this.changeNewGroceryUnitsName} changeNewGroceryQuantityName = {this.changeNewGroceryQuantityName}
                    />
                <div>
                </div>
                   <button onClick={this.submittedInput}> Add to List </button>
                </div>
            </div>
                    </div>
        )
    }
}


export default Groceries