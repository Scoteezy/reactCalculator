import React from 'react'
import './calculator.scss'
import { useState } from 'react'
const Calculator = () => {
    const [inputValue,setInputValue] = useState('');
    const handleInput = (e)=>{
        setInputValue(e.target.value.replace(/[^\d^+-/*]/g, ""));
    }

    const handleClick = (e)=>{
        if(e.target.value==='clear'){
            setInputValue('');
        }
       
        else if(e.target.value==='='){
            if(inputValue.split('')[inputValue.length-1]!=='+' && inputValue.split('')[inputValue.length-1]!=='-' && inputValue.split('')[inputValue.length-1]!=='*' && inputValue.split('')[inputValue.length-1]!=='/'){

            const res = Math.floor((eval(inputValue)*100)/100);
            setInputValue(String(res));
            }
        }
        else{
            setInputValue((inputValue)=>`${inputValue}${e.target.value}`);

        }
    }
  return (
    <div className="container">
        <div className="calculator">
            <input type="text" className="user__input" value={inputValue} onChange={handleInput}/>
            <br/>
            <button className="btn" value="1" onClick={handleClick}>1</button>
            <button className="btn" value="2" onClick={handleClick}>2</button>
            <button className="btn" value="3" onClick={handleClick}>3</button>
            <button className="btn" value="+" style={{'background' : '#ffb84d'}} onClick={handleClick}>+</button>
            <br/>
            <button className="btn" value="4" onClick={handleClick}>4</button>
            <button className="btn" value="5" onClick={handleClick}>5</button>
            <button className="btn" value="6" onClick={handleClick}>6</button>
            <button className="btn" value="-" style={{'background' : '#ffcc80'}} onClick={handleClick}>-</button>
            <br/>
            <button className="btn" value="7" onClick={handleClick}>7</button>
            <button className="btn" value="8" onClick={handleClick}>8</button>
            <button className="btn" value="9" onClick={handleClick}>9</button>
            <button className="btn" value="*" style={{'background' : '#ffe0b3'}} onClick={handleClick}>*</button>
            <br/>
            <button className="btn" value="." onClick={handleClick}>.</button>
            <button className="btn" value="0" onClick={handleClick}> 0</button>
            <button className="btn" value="clear" onClick={handleClick}>C</button>
            <button className="btn" value="/" style={{'background' : '#fff5e6'}} onClick={handleClick}>/</button>
            <br/>
            <button className="btn btn-equal" value="=" onClick={handleClick} >=</button>
        </div>
    </div>
  )
}

export default Calculator