import React, { Component } from 'react'

class ShoppingListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    onActiveHandler = () => {
        this.setState((prevState) => {
            return {
                active: !prevState.active,
            }
        })
    }

    render() {
        const {item} = this.props

        const {active} = this.state

        const {onActiveHandler} = this

        return (
            <div className={`list-item ${active && 'active'}`}>
                <div className='item-info'>
                    <span>{item.size}</span>
                    <p>{item.title}</p>
                </div>
                <div className='item-actions'>
                    <span className='check' onClick={onActiveHandler}>&#10003;</span>
                    <span className='times'>&times;</span>
                </div>
            </div>
        )
    }    
}

export default ShoppingListItem