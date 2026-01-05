import React from 'react'
import Info from './shopping-info'
import ShoppingForm from './shopping-form'
import ShoppingList from './shopping-list'
import Filter from './filter'

const App = () => {
    return (
        <div className='app'>
            <div className='wrapper'>
                <div className='wrapper-card'>
                    <Info />
                    <ShoppingForm />
                    <ShoppingList />
                    <Filter />
                </div>
                <img src="/earth.svg" alt="Earth image" />
            </div>
        </div>
    )
}

export default App