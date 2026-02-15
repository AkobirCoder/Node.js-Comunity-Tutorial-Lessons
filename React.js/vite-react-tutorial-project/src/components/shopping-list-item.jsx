import React, { Component } from 'react'

class ShoppingListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    render() {
        const {item, onDeleteItem, onToggleActiveItem} = this.props

        const {size, title, active, } = item

        // const {onActiveHandler} = this

        return (
            <div className={`list-item ${active && 'active'}`}>
                <div className='item-info'>
                    <span>{size}</span>
                    <p>{title}</p>
                </div>
                <div className='item-actions'>
                    <span className='check' onClick={onToggleActiveItem}>&#10003;</span>
                    <span className='times' onClick={onDeleteItem}>&times;</span>
                </div>
            </div>
        )
    }    
}

export default ShoppingListItem