import React, { useState } from 'react';

function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState('');

    const res = (evento) => {
        evento.preventDefault(); // Impede o envio do formulário
        const imc = peso / (altura ** 2);
        
        if (imc >= 18.5 && imc <= 24.9) {
            setResultado('Seu IMC está bom');
        } else {
            setResultado('Seu IMC está ruim');
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