import React from 'react'

const ShoppingInfo = ({dataLength}) => {
    return (
        <div className='card-info'>
            <h1>Shopping List</h1>
            <span>{dataLength}</span>
        </div>
    )
}

export default ShoppingInfo