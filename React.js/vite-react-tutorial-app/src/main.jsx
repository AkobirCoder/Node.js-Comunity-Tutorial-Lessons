import React, { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


// --- React.js ni oddiy Vanilla js dan farqi, ya'ni kerakli ma'lumotlarni consolega chiqaradi, bu esa React.js optimizatsiyasini oshiradi --- //

const element = <h1>Hello world</h1>

console.log(element)
console.dir(element)


// --- Aslida quyidagicha yozilishi kerak: --- //

const e = React.createElement('h1', {className: 'text'}, 'Hello world')


// --- JSX consoledagi objectni qaytaradi --- //

console.dir(e)

const el = (
    <Fragment> {/* --- React.js JSX elementlar har doim bitta type selectorga yoki React Fragmentga o'ralib turishi kerak, masalan: `<div></div>, <Fragment></Fragment>, <></>` --- */}
        {element}
        <button type='button'>Click me</button>
    </Fragment>
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        {element}
        {el}
    </StrictMode>,
)
