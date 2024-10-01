import React, { useState } from 'react';

function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState('');

    const res = (evento) => {
        evento.preventDefault(); // Impede o envio do formulário
        const imc = peso / (altura ** 2);
        
        if (imc < 18.5) {
            return "baixo peso";
        } else if (imc <= 24.9) {
            return "peso adequado (eutrófico)";
        } else if (imc <= 29.9) {
            return "sobrepeso";
        } else if (imc <= 34.9) {
            return "obesidade grau 1";
        } else {
            return "obesidade grau 2 ou maior";
        }
    };

    return (
        <>
            <form onSubmit={res}> 
                <div>
                    <label htmlFor="peso">Insira seu peso</label>
                    <input
                        type="number"
                        placeholder="Insira seu peso"
                        id="peso"
                        onChange={evento => setPeso(parseFloat(evento.target.value))}
                    />
                </div>

                <div>
                    <label htmlFor="altura">Insira sua altura</label>
                    <input
                        type="number"
                        placeholder="Insira sua altura"
                        id="altura"
                        min="1"
                        max="2"
                        step="0.01"
                        onChange={evento => setAltura(parseFloat(evento.target.value))}
                    />
                </div>
                <button type="submit">Calcular IMC</button>
            </form>
            {resultado && <p>{resultado}</p>} 
        </>
    );
}

export default Formulario;