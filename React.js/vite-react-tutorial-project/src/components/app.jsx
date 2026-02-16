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
            filter: 'all',
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

    searchData = (array, term) => {
        if (term.length === 0) {
            return array
        } else {
            return array.filter((arrayItem) => {
                return arrayItem.title.toLowerCase().indexOf(term.toLowerCase()) > -1
            })
        }
    }

    onUpdateSearch = (search) => {
        this.setState(() => {
            return {
                search: search,
            }
        })
    }

    filterData = (array, filter) => {
        switch (filter) {
            case 'completed':
                return array.filter((arrayItem) => {
                    return arrayItem.active
                })

            case 'big-size':
                return array.filter((arrayItem) => {
                    return arrayItem.size >= 10
                })
        
            default:
                return array
        }
    }

    onFilterSelect = (filter) => {
        this.setState(() => {
            return {
                filter: filter,
            }
        })
    }

    render() {
        const {data, search, filter} = this.state

        const {
            onDelete, 
            onToggleActive, 
            onAdd, 
            searchData, 
            onUpdateSearch, 
            filterData, 
            onFilterSelect
        } = this

        const dataLength = data.length

        const allData = filterData(searchData(data, search), filter)

        return (
            <div className='app'>
                <div className='wrapper'>
                    <div className='wrapper-card'>
                        <ShoppingInfo 
                            dataLength={dataLength} 
                        />
                        <SearchPanel 
                            onUpdateSearch={onUpdateSearch} 
                        />
                        <ShoppingAddForm 
                            onAdd={onAdd} 
                        />
                        <ShoppingList 
                            data={allData} 
                            onDelete={onDelete} 
                            onToggleActive={onToggleActive}
                        />
                        <Filter 
                            filter={filter} 
                            onFilterSelect={onFilterSelect} 
                        />
                    </div>
                    <img src="/earth.svg" alt="Earth image" />
                </div>
            </div>
        )
    }
}

export default App