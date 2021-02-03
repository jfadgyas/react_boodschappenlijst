import React, {Component} from 'react';
import GroceryList from './components/GroceryList';
import ShoppingCart from './components/ShoppingCart';

class Container extends Component {
    constructor(){
        super()
        this.state={
            groceryItems: [
                {id: 0, title: 'Appels'},
                {id: 1, title: 'Pak melk'}
            ],
            shoppingListItems: []
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
    }

    handleClickGroceryItem(e) {
        const index = this.state.shoppingListItems.findIndex(item => item.title === e.target.innerText)
        if (index === -1){
            this.setState(prevState => {
                const newItem = {
                    id: prevState.shoppingListItems.length,
                    title: e.target.innerText,
                    amount: 1
                }
                return {shoppingListItems: [...prevState.shoppingListItems].concat(newItem)}
            })
        }
        else{
            this.addAmountToItem(index)
        }
    }

    addAmountToItem(index) {
        this.setState(prevState => {
            let newShoppingListItems = [...prevState.shoppingListItems]
            newShoppingListItems[index].amount = prevState.shoppingListItems[index].amount + 1
            return newShoppingListItems
        })
    }

    emptyCart() {
        this.setState({shoppingListItems: []})
    }

    handleClickButton = (childData) => {
        if (childData){
            this.setState(prevState => {
                const newItem = {
                    id: prevState.groceryItems.length,
                    title: childData
                }
                return {groceryItems: [...prevState.groceryItems.concat(newItem)]}
            })
        }
    }
    
    render(){
        return (
            <div className='container'>
                <ShoppingCart data={{data: this.state.shoppingListItems, emptyCart: this.emptyCart}}/>
                <GroceryList data={{data: this.state.groceryItems, clickItem: this.handleClickGroceryItem, clickButton: this.handleClickButton}}/>
            </div>
        )
    }
}

export default Container;