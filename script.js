function calculateEAN13CheckDigit(ean12) {
    let sum = 0;
    
    // Percorre os 12 primeiros dígitos e calcula a soma ponderada
    for (let i = 0; i < ean12.length; i++) {
        const digit = parseInt(ean12[i], 10);
        // Alterna entre multiplicar por 1 e 3
        if (i % 2 === 0) {
            sum += digit;
        } else {
            sum += digit * 3;
        }
    }

    // Calcula o dígito de verificação
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit;
}

function generateEAN13() {
    const inputEan = document.getElementById('inputEan').value;
    if (inputEan.length !== 12 || isNaN(inputEan)) {
        document.getElementById('result').textContent = 'Por favor, digite exatamente 12 dígitos numéricos.';
        return;
    }

    const checkDigit = calculateEAN13CheckDigit(inputEan);
    const ean13 = inputEan + checkDigit;
    document.getElementById('result').textContent = `Código EAN-13 completo: ${ean13}`;
}
