import React from 'react';

const InputField = (props) => {
    const handleChange = e => props.onChange(e.target.value)

    return (
        <div>
            <input 
                type='text'
                name='newGroceryItem'
                value={props.value}
                placeholder='Add grocery item...'
                onChange={handleChange}/>
            <button
                onClick={() => {
                    props.data.clickButton(props.value)
                    props.onChange('')
                }}
            >Add to list</button>
        </div>
    )
}

export default InputField;