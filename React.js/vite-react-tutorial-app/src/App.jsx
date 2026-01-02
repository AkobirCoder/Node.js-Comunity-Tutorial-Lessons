// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// --- Components --- /

const Text = () => {
    return (
        <p style={{textAlign: 'justify'}}>
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

            <h1>Assalomu alaykum</h1>

            {/* --- Components --- */}
            <Text />
            <Button />
            <Fields />
        </>
    )
}

export default App
