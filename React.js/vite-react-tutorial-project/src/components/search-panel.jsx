import React, { Component } from 'react'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target

        const {onUpdateSearch} = this.props

        this.setState((prevState) => {
            return {
                ...prevState, [name]: value,
            }
        })

        onUpdateSearch(value)
    }
    
    render() {
        const {search} = this.state

        const {onChangeHandler} = this

        return (
            <input 
                type="text"
                className='search' 
                placeholder='Search...'  
                name={'search'}
                value={search}
                onChange={onChangeHandler}
            />
        )
    }   
}

export default SearchPanel