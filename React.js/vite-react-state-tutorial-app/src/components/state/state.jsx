import React, { Component } from 'react'

class StateCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            text: "Akobir",
            textInput: "",
            age: "",
        };

        // --- 1-usul: `context this` ni function'ga bog'lashning `bind()` methodi orqali bog'lash --- //
        this.changeHandlerInput = this.changeHandlerInput.bind(this);
    }

  // --- setState callback function bo'lib u har doim object qaytaradi --- //
  // --- setState'ni ichida faqat ko'rsatilgan state key o'zgaradi, bunda state'dagi boshqa keylar o'zgarmaydi --- //
  // --- bunda state'dagi text setState'da chaqirib o'zgartirilmasa u boshqa hollarda o'zgarmaydi --- //

    onIncrement = (initialValue) => {
        this.setState(({ count }) => {
            return {
            //   count: count + 1,
              count: count + initialValue,
              text: "Usmonov",
            };
        });
    };

    onDecrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    };

    onReset = () => {
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count = 0
        //     }
        // })

        this.setState((prevState) => ({
            count: (prevState.count = 0),
            text: (prevState.text = "Akobir"),
        }));
    };

    // --- Quyidagi function `function declarition` bo'lgani sabab React'ning qat'iy rejimi (StrictMode) tufayli this `undefined` bo'ladi --- //
    // --- Ammo function `arrow function` bo'lsa unda `context this` yuqoridagi state object'ga osiladi --- //

    changeHandlerInput(event) {
        this.setState({
            textInput: event.target.value,
        });
    }

    // --- 2-usul: `context this` ni function'ga bog'lashning `arrow function` dan foydalanish usuli --- //

    changeHandler = (event, number) => {
        console.log(number);

        this.setState({
            age: event.target.value,
        })
    }

    render() {
        const { image, title, category } = this.props;

        const { count, text, textInput, age } = this.state;

        const { onIncrement, onDecrement, onReset, changeHandlerInput, changeHandler } = this;

        return (
            <div className="card">
                <img
                    style={{ borderRadius: 10 }}
                    width={"100%"}
                    src={image}
                    alt="Course image"
                />
                <h1 style={{ marginBottom: 10 }}>{title}</h1>
                <p style={{ margin: 0 }}>
                    {category} <span>{count}</span> <span>{text}</span>
                </p>
                <div className="btn-group mt-3">
                    {/* <button className="btn btn-success" onClick={onIncrement}> */}
                    
                    {/* --- 3-usul: `context this` ni function'ga bog'lashning `callback funtion` ishlatish usuli, hamda funtion'ga parametr berish --- */}
                    <button className="btn btn-success" onClick={() => onIncrement(10)}>
                        increment
                    </button>
                    {/* --- 4-usul: `context this` ni function'ga bog'lashning render'da `bind()` methodini ishlatish --- */}
                    <button className="btn btn-danger" onClick={onDecrement.bind(this)}>
                        decrement
                    </button>
                    <button className="btn btn-primary" onClick={onReset}>
                        reset
                    </button>
                </div>
                <div className='d-flex gap-3 mt-3'>
                    <p className='mb-0'>Text: {textInput}</p>
                    <p className='mb-0'>Age: {age}</p>
                </div>
                <div className="form-floating mt-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Text"
                        onChange={changeHandlerInput}
                    />
                    <label className="form-label">Text</label>
                </div>
                <div className="form-floating mt-3">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="Age"
                        // --- function'ga parametr berish inline arrow (callback funtion) funtion orqali amalga oshiriladi --- //
                        onChange={(event) => changeHandler(event, 10)}
                    />
                    <label className="form-label">Age</label>
                </div>
            </div>
        );
    }
}

export default StateCard