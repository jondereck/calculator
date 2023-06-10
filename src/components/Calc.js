import { useState, useRef } from "react";
import { getRandomColor } from "../utils/colorAPI";

function Calc() {
    const inputRef = useRef(null); // userinput
    const resultRef = useRef(null); //result
    const [result, setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
        const randomColor = getRandomColor();
        resultRef.current.style.color = randomColor;
    }


    function minus(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value))
        const randomColor = getRandomColor();
        resultRef.current.style.color = randomColor;
    };

    function times(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value))
        const randomColor = getRandomColor();
        resultRef.current.style.color = randomColor;
    };

    function divide(e) {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value))
        const randomColor = getRandomColor();
        resultRef.current.style.color = randomColor;
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = "";
    };

    function resetResult(e) {
        e.preventDefault();
        setResult(0);
    };




    console.log(resultRef.current);

    return (
        <div className="container">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form className="calc-form">
                <p ref={resultRef}>
                    {result}
                </p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number"
                />

                <div className="button-row">
                    <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button>
                </div>
                <div className="button-row">
                    <button onClick={times}>*</button>
                    <button onClick={divide}>/</button>
                </div>
     
                    <button onClick={resetInput} className="tomato-button">reset input</button>
                    <button onClick={resetResult} className="tomato-button">reset result</button>
              
               
                
            </form>

        </div>
    )
}

export default Calc