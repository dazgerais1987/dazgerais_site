function converterParaCm() {
    // 1. Coleta de dados do input
    let pes = parseFloat(document.getElementById('pes').value) || 0;
    let polegadas = parseFloat(document.getElementById('polegadas').value) || 0;

    // 2. Cálculos
    let totalCm = (pes * 30.48) + (polegadas * 2.54);

    // 3. Exibição do resultado
    document.getElementById('resultadoCm').innerText = totalCm.toFixed(1);

    // 4. Limpar os inputs para o próximo cálculo
    ['pes', 'polegadas'].forEach(id => document.getElementById(id).value = "");
}

function converterParaPesPolegadas() {
    // 1. Coleta de dados do input
    let cm = parseFloat(document.getElementById('cm').value) || 0;

    // 2. Cálculos
    let totalPolegadas = cm / 2.54;
    let pes = Math.floor(totalPolegadas / 12);
    let polegadas = Math.round(totalPolegadas % 12);

    // 3. Exibição do resultado
    document.getElementById('resultadoPesPolegadas').innerText = `${pes}' ${polegadas}"`;

    // 4. Limpar os inputs para o próximo cálculo
    document.getElementById('cm').value = "";
}