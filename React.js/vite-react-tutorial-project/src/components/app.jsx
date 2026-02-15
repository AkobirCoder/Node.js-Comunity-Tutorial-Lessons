import React, { Component } from 'react'
import { Filter, ShoppingAddForm, ShoppingInfo, ShoppingList } from './'
import { data } from '../constants/'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    render() {
        const {data} = this.state

        return (
            <div className='app'>
                <div className='wrapper'>
                    <div className='wrapper-card'>
                        <ShoppingInfo />
                        <ShoppingAddForm />
                        <ShoppingList data={data} />
                        <Filter />
                    </div>
                    <img src="/earth.svg" alt="Earth image" />
                </div>
            </div>
        )
    }
}

export default App