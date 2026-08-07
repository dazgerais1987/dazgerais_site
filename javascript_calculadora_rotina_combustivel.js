const msg_resultado = document.getElementById("resultado");

function calcular() {
    // 1. Coleta de dados do input
    let kmRotina1 = parseFloat(document.getElementById("kmRotina1").value);
    let kmRotina2 = parseFloat(document.getElementById("kmRotina2").value);
    let diasRotina1 = parseFloat(document.getElementById("diasRotina1").value);
    let diasRotina2 = parseFloat(document.getElementById("diasRotina2").value);
    let kmVeiculo = parseFloat(document.getElementById("kmVeiculo").value);
    let valorCombustivel = parseFloat(document.getElementById("valorCombustivel").value);

    // 2. Validação de dados
    if (isNaN(kmRotina1) || isNaN(kmRotina2) || isNaN(diasRotina1) || isNaN(diasRotina2)) {
        msg_resultado.innerHTML = "Informação de quilometragem ou dias inválida!";
        return;
    }
    if (isNaN(kmVeiculo)) {
        msg_resultado.innerHTML = "Informação de km/l do seu veículo inválida!";
        return;
    }
    if (isNaN(valorCombustivel)) {
        msg_resultado.innerHTML = "Informação do valor do litro do combustível inválida!";
        return;
    }

    // 3. Cálculos
    let mesRotina1 = diasRotina1 * kmRotina1;
    let mesRotina2 = diasRotina2 * kmRotina2;
    let qntMes = diasRotina1 + diasRotina2;
    let rotinaMensal = mesRotina1 + mesRotina2;
    let consumoRotina = rotinaMensal / kmVeiculo;
    let valorMensal = consumoRotina * valorCombustivel;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `Consumo médio do veículo: ${kmVeiculo}km/l, total da sua rotina: ${rotinaMensal}km em um total de ${qntMes} dias, valor do combustível por litro: R$ ${valorCombustivel}, você irá consumir ${consumoRotina.toFixed(1)} litros e irá gastar R$ ${valorMensal.toFixed(2)} neste mês.`;

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("kmRotina1").value = "";
    document.getElementById("kmRotina2").value = "";
    document.getElementById("diasRotina1").value = "";
    document.getElementById("diasRotina2").value = "";
    document.getElementById("kmVeiculo").value = "";
    document.getElementById("valorCombustivel").value = "";
}
