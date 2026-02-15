import React from 'react'
import { ShoppingListItem } from './'

const ShoppingList = ({data}) => {
    return (
        <div className='shopping-list'>
            {
                data.map((item) => {
                    return (
                        <ShoppingListItem
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </div>
    )
}

export default ShoppingList