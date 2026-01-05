import React from 'react'

const ShoppingForm = () => {
    return (
        <div className='form'>
            <input type="text" className='input-title' placeholder='Title...' />
            <input type="number" className='input-number' placeholder='14' />
            <button>Add</button>
        </div>
    )
}

export default ShoppingForm