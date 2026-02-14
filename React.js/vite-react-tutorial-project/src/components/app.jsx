import React from 'react'
import Info from './shopping-info'
import ShoppingAddForm from './shopping-add-form'
import ShoppingList from './shopping-list'
import Filter from './filter'

const App = () => {
    const data = [
        {
            id: 1,
            size: 14,
            title: 'Buy Bananas',
            active: false,
        },
        {
            id: 2,
            size: 10,
            title: 'Buy Ananas',
            active: true,
        },
        {
            id: 3,
            size: 8,
            title: 'Buy Milk',
            active: false,
        },
    ]

    return (
        <div className='app'>
            <div className='wrapper'>
                <div className='wrapper-card'>
                    <Info />
                    <ShoppingAddForm />
                    <ShoppingList data={data} />
                    <Filter />
                </div>
                <img src="/earth.svg" alt="Earth image" />
            </div>
        </div>
    )
}

export default App