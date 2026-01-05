import React from 'react'

const ShoppingList = () => {
    return (
        <div className='shopping-list'>
            <div className='list-item'>
                <div className='item-info'>
                    <span>14</span>
                    <p>Buy Bananas</p>
                </div>
                <div className='item-actions'>
                    <span className='check'>&#10003;</span>
                    <span className='times'>&times;</span>
                </div>
            </div>
            <div className='list-item active'>
                <div className='item-info'>
                    <span>14</span>
                    <p>Buy Bananas</p>
                </div>
                <div className='item-actions'>
                    <span className='check'>&#10003;</span>
                    <span className='times'>&times;</span>
                </div>
            </div>
        </div>
    )
}

export default ShoppingList