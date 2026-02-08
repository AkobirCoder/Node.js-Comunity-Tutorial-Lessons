import React from 'react'

// const Card = (props) => {
const Card = ({title, category, image}) => { // Bu yerda props'dan ma'lumotlar to'g'ridan to'g'ri destrukturizatsiya qilinadi
    // console.log(props)

    // const {title, category, image} = props {/* Bu yerda props'dan ma'lumotlar destrukturizatsiya qilinadi */}

    return (
        <div>
            <img width={'100%'} src={image} alt="Course image" />
            <h1>{title()}</h1>
            <p>{category.category}</p>
        </div>
    )
}

export default Card