import React from 'react'
import { ShoppingListItem } from './'

const ShoppingList = ({data, onDelete, onToggleActive}) => {
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

export default ShoppingList