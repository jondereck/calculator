import { useRef, useState } from "react";
import { getRandomColor } from "../utils/colorAPI";

export default function Counter() {

    const countRef = useRef(null)
    const [count, setCount] = useState(0)

    function increment(e) {
        e.preventDefault();
        setCount(count + 1);
        const color = getRandomColor();
        countRef.current.style.color = color;
    }

    function decrement(e) {
        e.preventDefault();
        setCount(count - 1)
        const color = getRandomColor();
        countRef.current.style.color = color;
    }

    function handleReset() {
        setCount(0);
    }
    return (
        <div className="container">
            <div>
                <h1>Counter</h1>
            </div>
            <form className="calc-form">
                <p ref={countRef}>{count}</p>
                <div className="button-row">
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
             </div>
                <button onCLick={handleReset} className="tomato-button">Reset</button>
            </form>

        </div>
    );
}