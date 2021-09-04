import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const [valuePercentagem, setPercentagem] = useState(0);
  return (
    <div className="header">
      <h1>Calculadora de Gorjeta</h1>

      <p>Qual o valor da conta?</p>
      <input type="number" className="input-value" value={value} onChange={(e) => setValue(parseFloat(e.target.value))}></input>

      <p>Qual a porcentagem da gorjeta?</p>
      <input type="number" className="input-value" value={valuePercentagem} onChange={(e) => setPercentagem(parseFloat(e.target.value))}></input>
    
      <hr/>

      {value > 0 &&
        <div className="resume">
          <h1>Resumo da Conta</h1>
          <p>Valor consumido: R${value}</p>
          <p>Gorjeta: {valuePercentagem}% = R${(valuePercentagem/100) * value}</p>
          <p>Valor total a pagar: <strong>R${value + (valuePercentagem/100 * value)}</strong></p>
        </div>
      }
    </div>
  );
}

export default App;