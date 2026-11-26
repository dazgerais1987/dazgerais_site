const valorInput = document.getElementById('valorConverter');
const conversaoSelect = document.getElementById('converter');
const resultadoDiv = document.getElementById('resultado');

function calcular() {
    const valor = parseFloat(valorInput.value);
    const tipo = conversaoSelect.value;

    // Se o valor não for um número ou nenhuma opção válida for selecionada, limpa o resultado
    if (isNaN(valor) || !tipo) {
        resultadoDiv.textContent = "";
        return;
    }

    let resultado = 0;
    let unidade = "";

    switch (tipo) {
        // BR para EUA
        case "cmPolegadas": resultado = valor / 2.54; unidade = "polegadas"; break;
        case "cmPes": resultado = valor / 30.48; unidade = "pés"; break;
        case "metrosJardas": resultado = valor * 1.09361; unidade = "jardas"; break;
        case "kmMilhas": resultado = valor * 0.621371; unidade = "milhas"; break;
        case "kmMilhasNauticas": resultado = valor * 0.539957; unidade = "milhas náuticas"; break;
        case "gramasOncas": resultado = valor * 0.035274; unidade = "onças"; break;
        case "quiloLibras": resultado = valor * 2.20462; unidade = "libras"; break;
        case "litrosOncasFluidas": resultado = valor * 33.814; unidade = "onças fluidas"; break;
        case "litrosGalao": resultado = valor * 0.264172; unidade = "gal"; break;
        case "grausFahrenheit": resultado = (valor * 9/5) + 32; unidade = "°F (fahrenheit)"; break;
        
        // EUA para BR
        case "polegadasCentimetro": resultado = valor * 2.54; unidade = "cm"; break;
        case "pesMetros": resultado = valor * 0.3048; unidade = "m"; break;
        case "jardasMetros": resultado = valor * 0.9144; unidade = "m"; break;
        case "milhasKm": resultado = valor * 1.60934; unidade = "km"; break;
        case "milhasNauticasKm": resultado = valor * 1.852; unidade = "km"; break;
        case "oncasGramas": resultado = valor * 28.3495; unidade = "g"; break;
        case "fahrenheitGraus": resultado = (valor - 32) * 5 / 9; unidade = "°C (graus celsius)"; break;
    }

    // Exibe o resultado com até 4 casas decimais fixas
    resultadoDiv.textContent = `Resultado: ${resultado.toFixed(2).replace('.', ',')} ${unidade}`;
}

// Executa a função sempre que o usuário digitar um número ou mudar a opção do select
valorInput.addEventListener('input', calcular);
conversaoSelect.addEventListener('change', calcular);