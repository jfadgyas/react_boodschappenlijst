import React, {useState} from 'react';
import List from './List'
import InputField from './InputField'


const GroceryList = (data) => {
    const [value, setValue] = useState('')
    
    const inputChange = newValue => setValue(newValue)

    return (
        <div className='grocery-cart'>
            <h2>Grocery List</h2>
            <InputField {...data} value={value} onChange={inputChange}/>
            <List {...data}/>
        </div>
    )
}

export default GroceryList;