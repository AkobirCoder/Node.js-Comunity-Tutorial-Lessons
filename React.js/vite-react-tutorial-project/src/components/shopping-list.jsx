import React, { Component } from 'react'
import { ShoppingListItem } from './'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data, onDelete, onToggleActive} = this.props

        return (
            <div className='shopping-list'>
                {
                    data.map((item) => {
                        return (
                            <ShoppingListItem
                                key={item.id}
                                item={item}
                                onDeleteItem={() => onDelete(item.id)}
                                onToggleActiveItem={() => onToggleActive(item.id)}
                            />
                        )
                    })
                }
            </div>
        )
    }
    
}

export default ShoppingList