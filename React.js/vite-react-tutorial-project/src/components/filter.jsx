import React, { Component } from 'react'

class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='filter'>
                <div className='btns'>
                    <button className='active'>All products</button>
                    <button>Completed</button>
                    <button>Big size</button>
                </div>
            </div>
        )
    }
}

export default Filter