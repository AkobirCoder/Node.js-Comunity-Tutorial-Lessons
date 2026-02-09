import React from 'react'

// const Card = (props) => {
const Card = ({title, category, image}) => { // Bu yerda props'dan ma'lumotlar to'g'ridan to'g'ri destrukturizatsiya qilinadi
    // console.log(props)

    // const {title, category, image} = props {/* Bu yerda props'dan ma'lumotlar destrukturizatsiya qilinadi */}

    return (
        <div className="card">
            <img
                style={{ borderRadius: 10 }}
                width={"100%"}
                src={image}
                alt="Course image"
            />
            <h1 style={{ marginBottom: 10 }}>{title()}</h1>
            <p style={{ margin: 0 }}>{category.category} <span>0</span></p>
            <div className="btn-group mt-3">
                <button className="btn btn-success">increment</button>
                <button className="btn btn-danger">decrement</button>
                <button className="btn btn-primary">reset</button>
            </div>
        </div>
    )
}

export default Card