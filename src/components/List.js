import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {    
    render(){
        const showList = this.props.data.data.map(item => <ListItem key={item.id} item={item} clickItem={this.props.data.clickItem}/>)
        return (
            <ul>
                {showList}
            </ul>
        )
    }
}

export default List;