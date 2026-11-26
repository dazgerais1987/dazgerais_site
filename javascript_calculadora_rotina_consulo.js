const msg_resultado = document.getElementById("resultado")

function calcular() {
    let km_rotina1 = parseFloat(document.getElementById("km_rotina1").value)
    let km_rotina2 = parseFloat(document.getElementById("km_rotina2").value)
    let km_veiculo = parseFloat(document.getElementById("km_veiculo").value)
    let valor_combustivel = parseFloat(document.getElementById("valor_combustivel").value)
    let quinzenaRotina1 = km_rotina1 * 15
    let quinzenaRotina2 = km_rotina2 * 15
    let mes30dias = quinzenaRotina1 + quinzenaRotina2
    let consumo_rotina = mes30dias / km_veiculo
    let valor_rotina = consumo_rotina * valor_combustivel

    if (isNaN(km_rotina1)) {
        msg_resultado.innerHTML = "Informação de quilometragem inválida!"
        return
    }

    if (isNaN(km_rotina2)) {
        msg_resultado.innerHTML = "Informação de quilometragem inválida!"
        return
    }

    if (isNaN(km_veiculo)) {
        msg_resultado.innerHTML = "Informação de quilometragem por litro do seu veículo inválida!"
        return
    }

    if (isNaN(valor_combustivel)) {
        msg_resultado.innerHTML = "Informação do valor do combustível inválida!"
        return
    }

    else {
        msg_resultado.innerHTML = `Consumo médio do veículo: ${km_veiculo}km/l, total da sua rotina: ${mes30dias}km por mês, valor combustível por litro: R$ ${valor_combustivel}, você irá consumir ${consumo_rotina.toFixed(1)} litros e irá gastar R$ ${valor_rotina.toFixed(2)} em um mês de 30 dias corridos.`
    }
}