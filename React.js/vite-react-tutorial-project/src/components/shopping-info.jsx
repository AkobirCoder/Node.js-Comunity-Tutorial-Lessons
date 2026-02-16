import React, { Component } from 'react'

class ShoppingInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {dataLength} = this.props

        return (
            <div className='card-info'>
                <h1>Shopping List</h1>
                <span>{dataLength}</span>
            </div>
        )
    }
}

export default ShoppingInfo