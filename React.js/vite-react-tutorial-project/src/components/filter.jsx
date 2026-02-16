import React, { Component } from 'react'

class Filter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const buttons = [
            {
                id: 'all', label: 'All products',
            },
            {
                id: 'completed', label: 'Completed',
            },
            {
                id: 'big-size', label: 'Big size',
            },
        ]

        const {filter, onFilterSelect} = this.props

        return (
            <div className='filter'>
                <div className='btns'>
                    {
                        buttons.map((btn) => {
                            return (
                                <button 
                                    key={btn.id} 
                                    className={`${filter === btn.id && 'active'}`}
                                    onClick={() => onFilterSelect(btn.id)}
                                >
                                    {btn.label}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Filter