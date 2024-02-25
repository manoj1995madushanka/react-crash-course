import './App.css';
import {useEffect, useState} from "react";

const App = () => {

    const [counter, setCounter] = useState(0);

    // never modify state manually
    // use effect state runs when reload the app
    // React is about components, states and props
    useEffect(() => {
        alert("You changed the counter : " + counter);
    }, [counter])

    return (
        <div className="App">
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </div>
    )
}

export default App;
