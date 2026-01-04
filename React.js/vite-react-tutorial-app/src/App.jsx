// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Component } from "react"


// --- Components --- //

const Text = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quidem molestiae id blanditiis optio ex a iste illum veniam velit quo.
        </p>
    )
}

const Button = () => {
    const item = 'Login'

    const getItem = () => <p style={{margin: 0, padding: 0}}>Logout</p>

    const isLogin = true;


    // --- Componentning contentini function yordamida condition orqali o'zgartirish --- //

    const getLogin = () => {
        if (isLogin) {
            return (
                <button>Logout</button>
            )
        }

        return (
            <button>Login</button>
        )
    }

    const styles = {
        marginTop: 20,
    }

    return (
        <>
            <button>Login</button>
            <button>{item}</button>
            <button>
                {getItem()}
            </button> <br />
            <div style={styles}>
                {
                    getLogin()
                }
                {/* --- Componentning contentini ternary operator orqali o'zgartirish --- */}
                <button>
                    {
                        isLogin ? 'Logout' : 'Login'
                    }
                </button>
            </div>
        </>
    )
}

const Fields = () => {
    return (
        <input 
            type="text" 
            name="input" 
            style={{
                width: 500
            }} 
            disabled={true} 
            placeholder="Enter your name" 
        />
    )
} 


// --- Class component --- //

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    onIncrement = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            }
        })
    }

    render() {
        const styles = {
            margin: '0 auto',
            color: 'white',
            width: 700,
            height: 350,
            backgroundColor: 'blue',
            textAlign: 'center',
        }

        const {ism, familiya} = this.props

        return (
            <div style={styles}>
                <h1 style={{fontWeight: 'normal', paddingTop: 100}}>Count: {this.state.count}</h1>
                <button 
                    type="button"
                    style={{
                        padding: '15px 25px',
                        fontWeight: 'bolder',
                        fontSize: 20,
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={this.onIncrement}
                >
                    Click
                </button>
                <p>{ism} {familiya}</p>
            </div>
        )
    }
}

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            {/* <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}

            <div style={{textAlign: 'center'}}>
                <h1>Assalomu alaykum</h1>
                {/* --- Components --- */}
                <Text />
                <Button />
                <Fields />
                <hr />

                {/* --- Class component --- */}
                <Card ism={'Akobir'} familiya={'Usmonov'} />
            </div>
        </>
    )
}

export default App
