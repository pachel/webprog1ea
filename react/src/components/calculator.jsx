import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = value => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Figyelem: eval használata csak példa céljából!
    } catch {
      setResult('Hiba!');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div>
      <h2>Számológép</h2>
      <div style={{ marginBottom: '10px' }}>
        <div>{input}</div>
        <div>= {result}</div>
      </div>
      <div>
        {['1','2','3','4','5','6','7','8','9','0','+','-','*','/'].map((char) => (
          <button key={char} onClick={() => handleClick(char)} style={{ margin: '3px' }}>
            {char}
          </button>
        ))}
        <button onClick={calculate} style={{ margin: '3px' }}>=</button>
        <button onClick={clear} style={{ margin: '3px' }}>C</button>
      </div>
    </div>
  );
}

export default Calculator;