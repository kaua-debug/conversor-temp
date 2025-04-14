function converter() {
    const temperatura = parseFloat(document.getElementById('temperature').value);
    const tipo = document.getElementById('conversionType').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(temperatura)) {

    resultado.textContent = 'Por favor, insira um número válido.';
    return;

}

        if (tipo === 'CtoF') {
            
          const fahrenheit = (temperatura * 9/5) + 32;
        resultado.textContent = `${fahrenheit.toFixed(2)} °F`;

        } else {

          const celsius = (temperatura - 32) * 5/9;
        resultado.textContent = `${celsius.toFixed(2)} °C`;
    }
}
