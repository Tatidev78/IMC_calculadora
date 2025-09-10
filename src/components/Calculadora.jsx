import { useState } from 'react';

function Calculadora() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularIMC =() =>{
        if(!altura || !peso) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const alturaMetros = parseFloat(altura) / 100;
        const pesoKG = parseFloat(peso) / (alturaMetros * alturaMetros);
        const imc = pesoKG;
        let categoria = '';

        if (imc < 18.5) categoria = 'Abaixo do peso';
        else if (imc < 25) categoria = 'Peso normal';
        else if (imc < 30) categoria = 'Sobrepeso';
        else categoria = 'Obesidade';

    setResultado({ imc: imc.toFixed(2), categoria });

    }


    return(
        <div className="calculadora-container">
            <h2>Calculadora de IMC</h2>
            <div className="input-group">
                <label>Altura(cm):</label>
                <input type="number" value={altura} onChange={e=>setAltura(e.target.value)} />
            </div>
            <div className="input-group">
                <label>Peso(kg):</label>
                <input type="number" value={peso} onChange={e=>setPeso(e.target.value)} />
            </div>
            <button onClick={calcularIMC}>Calcular:</button>
            {resultado && (
        <div className="resultado">
          <p>IMC: {resultado.imc}</p>
          <p>Categoria: {resultado.categoria}</p>
        </div>
      )}

        </div>
    )
}
export default Calculadora;