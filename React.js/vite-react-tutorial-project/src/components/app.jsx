import React, { Component } from 'react'
import { v4 as uuid4 } from 'uuid'
import { Filter, SearchPanel, ShoppingAddForm, ShoppingInfo, ShoppingList } from './'
import { array } from '../constants/'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: array,
            search: '',
        }
    }

    onDelete = (id) => {
        const {data} = this.state

        const newArray = data.filter((dataItem) => {
            return dataItem.id !== id
        })

        this.setState(() => {
            return {
                data: newArray
            }
        })

        // console.log(newArray)
    }

    onToggleActive = (id) => {
        const {data} = this.state

        const newArray = data.map((dataItem) => {
            if (dataItem.id === id) {
                return {...dataItem, active: !dataItem.active}
            } else {
                return dataItem
            }
        })

        this.setState(() => {
            return {
                data: newArray
            }
        })

        // console.log(newArray)
    }

    onAdd = (item) => {
        const {data} = this.state

        const {title, number} = item

        const newData = {title, size: number, active: false, id: uuid4()}

        const newArray = [...data, newData]

        this.setState(() => {
            return {
                data: newArray
            }
        })

        // console.log(newArray)
    }

    render() {
        const {data} = this.state

        const {onDelete, onToggleActive, onAdd} = this

        const dataLength = data.length

        return (
            <div className='app'>
                <div className='wrapper'>
                    <div className='wrapper-card'>
                        <ShoppingInfo dataLength={dataLength} />
                        <SearchPanel />
                        <ShoppingAddForm onAdd={onAdd} />
                        <ShoppingList 
                            data={data} 
                            onDelete={onDelete} 
                            onToggleActive={onToggleActive}
                        />
                        <Filter />
                    </div>
                    <img src="/earth.svg" alt="Earth image" />
                </div>
            </div>
        )
    }
}

export default App