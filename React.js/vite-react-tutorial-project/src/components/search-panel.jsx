import React, { Component } from 'react'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <input 
                className='search' 
                placeholder='Search...' 
                type="text" 
            />
        )
    }   
}

export default SearchPanel