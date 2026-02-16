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
                    data.length ? data.map((item) => {
                        return (
                            <ShoppingListItem
                                key={item.id}
                                item={item}
                                onDeleteItem={() => onDelete(item.id)}
                                onToggleActiveItem={() => onToggleActive(item.id)}
                            />
                        )
                    })
                    : (
                        <div 
                            style={{
                                display: 'flex', 
                                flexDirection: 'column'
                            }}
                        >
                            <img src="/not-found.png" height={'50%'} alt="not found image" />
                            <p 
                                style={{
                                    color: 'white', 
                                    textAlign: 'center', 
                                    fontSize: 20,
                                    fontWeight: 600
                                }}
                            >
                                Not found
                            </p>
                        </div>
                    )
                }
            </div>
        )
    }
    
}

export default ShoppingList