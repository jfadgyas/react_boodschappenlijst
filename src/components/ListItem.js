import React from 'react';

const ListItem = (props) => {
    return (
        <li 
            className=''
            key={props.item.id}
            onClick={props.clickItem}
        >{props.item.title}<span>{props.item.amount && `Hoeveelheid ${props.item.amount}`}</span></li>
    )
}

export default ListItem;