import React, { Component } from 'react'

class ShoppingAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Buy',
            number: '',
        }
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target

        this.setState((prevState) => {
            return {...prevState, [name]: value}
        })
    }

    onAdd = (event) => {
        event.preventDefault()

        const {onAdd} = this.props

        const {title, number} = this.state

        const data = {
            title: title,
            number: number,
        }

        if (data.title.length === 0 || data.number.length === 0) {
            alert('All fields should be completed')
        } else {
            onAdd(data)
        }

        this.setState(() => {
            return {
                title: '',
                number: '',
            }
        })

        // console.log(data)
    }

    render() {
        const {title, number} = this.state

        const {onChangeHandler, onAdd} = this

        return (
            <form className='form' onSubmit={onAdd}>
                <input 
                    type="text" 
                    name={'title'}
                    value={title}
                    className='input-title' 
                    placeholder='Title...' 
                    onChange={onChangeHandler} 
                />
                <input 
                    type="number" 
                    name={'number'} 
                    value={number}
                    className='input-number' 
                    placeholder='14' 
                    onChange={onChangeHandler} 
                />
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default ShoppingAddForm