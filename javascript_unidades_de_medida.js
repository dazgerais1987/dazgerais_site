const msg_resultado = document.getElementById("resultado");

//Conversão das medidas americanas para brasileiras:


// COMPRIMENTO E DISTÂNCIAS

// Converter Polegadas em centímetros:
// Polegadas (inch / in): 2,54cm
function calcularInch() {
    // 1. Coleta de dados do input
    let valorPolegada = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorPolegada)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });

        return;
    }

    // 3. Cálculos
    let valorConvertido = valorPolegada * 2.54;
    let valorMetros = valorConvertido / 100; // Convertendo centímetros para metros

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorPolegada} polegadas, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}cm ou ${valorMetros.toFixed(2).replace(".", ",")}m.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Pés em centímetros:
// Pé (foot / ft): 12 polegadas ou 30,48cm
function calcularFoot() {
    // 1. Coleta de dados do input
    let valorPe = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorPe)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorPe * 30.48;
    let valorMetros = valorConvertido / 100; // Convertendo centímetros para metros

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorPe} pés, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}cm ou ${valorMetros.toFixed(2).replace(".", ",")}m.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Jardas em centímetros:
// Jarda (yard / yd): 3 pés ou 91,44cm
function calcularYard() {
    // 1. Coleta de dados do input
    let valorJarda = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorJarda)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorJarda * 91.44;
    let valorMetros = valorConvertido / 100; // Convertendo centímetros para metros

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorJarda} jardas, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}cm ou ${valorMetros.toFixed(2).replace(".", ",")}m.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Milhas em Quilômetros:
// Milha (mile): 1.60934km
function calcularMile() {
    // 1. Coleta de dados do input
    let valorMilha = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorMilha)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorMilha * 1.60934;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorMilha} milhas, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}km.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Milhas Náutica em Quilômetros:
// Milha Náutica (NM): 1.852km
function calcularMilhaNautica() {
    // 1. Coleta de dados do input
    let valorNM = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorNM)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorNM * 1.852;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorNM} milhas náutica, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}km.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Todos os Comprimentos e Distâncias
function calcularTodasCompDist() {
    // 1. Coleta de dados do input
    let valorParaConverter = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorParaConverter)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });

        return;
    }

    // 3. Cálculos
    let valorPolegada = valorParaConverter * 2.54;
    let valorPolegadaMetros = valorPolegada / 100; // Convertendo centímetros para metros
    let valorPe = valorParaConverter * 30.48;
    let valorPeMetros = valorPe / 100; // Convertendo centímetros para metros
    let valorJarda = valorParaConverter * 91.44;
    let valorJardaMetros = valorJarda / 100; // Convertendo centímetros para metros
    let valorMilha = valorParaConverter * 1.60934;
    let valorMilhaNautica = valorParaConverter * 1.852;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorParaConverter} polegadas para: ${valorPolegada.toFixed(2).replace(".", ",")}cm ou ${valorPolegadaMetros.toFixed(2).replace(".", ",")}m, ${valorParaConverter} pés para: ${valorPe.toFixed(2).replace(".", ",")}cm ou ${valorPeMetros.toFixed(2).replace(".", ",")}m, ${valorParaConverter} jardas para: ${valorJarda.toFixed(2).replace(".", ",")}cm ou ${valorJardaMetros.toFixed(2).replace(".", ",")}m, ${valorParaConverter} milhas para: ${valorMilha.toFixed(2).replace(".", ",")}km, ${valorParaConverter} milhas náutica para: ${valorMilhaNautica.toFixed(2).replace(".", ",")}km.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}


// PESO E MASSA

// Converter Onça em Gramas:
// Onça (once / oz): 28,35g
function calcularOnce() {
    // 1. Coleta de dados do input
    let valorOnce = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorOnce)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorOnce * 28.35;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorOnce} onças, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}g.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Libra em Quilos:
// Libra (pound / lb): 16 onças ou 0.45359237kg
function calcularPound() {
    // 1. Coleta de dados do input
    let valorLibra = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorLibra)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorLibra * 0.45359237;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorLibra} libras, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}kg.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Peso e Massa:
function calcularPesoMassa() {
    // 1. Coleta de dados do input
    let valorPM = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorPM)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let converteOnca = valorPM * 28.35;
    let converteLibra = valorPM * 0.45359237;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorPM} onças, equivale: ${converteOnca.toFixed(2).replace(".", ",")}kg, e o valor ${valorPM} libras equivale: ${converteLibra.toFixed(2).replace(".", ",")}kg.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// VOLUME E LIQUIDOS

// Converter Onça fluida em Litros:
// Onça fluida (fluid once / fl oz): 0.0295735L
function calcularFluidOnce() {
    // 1. Coleta de dados do input
    let valorOncaFluida = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorOncaFluida)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorOncaFluida * 0.0295735;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorOncaFluida} onças fluida, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}L.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Galão em Litros:
// Galão (gallon / gal): 3.785411784 litros
function calcularGallon() {
    // 1. Coleta de dados do input
    let valorGalao = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorGalao)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorGalao * 3.785411784;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorGalao} galões, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}L.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Fahrenheit em Graus Celsius:
// Fahrenheit para Graus Celsius: Subtraia por 32 e divide por 1.8
function calcularFahrenheit() {
    // 1. Coleta de dados do input
    let valorFahrenheit = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorFahrenheit)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = (valorFahrenheit - 32) / 1.8;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorFahrenheit}°F, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}°C.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

//Conversão das medidas brasileiras para americanas:
// Converter centímetros em polegadas:
// Polegadas (inch / in): 2,54cm
function calcularParaInch() {
    // 1. Coleta de dados do input
    let valorCentimetro = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorCentimetro)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorCentimetro / 2.54;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorCentimetro}cm, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} polegadas.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter centímetros em pés:
// Pé (foot / ft): 12 polegadas ou 30,48cm
function calcularParaFoot() {
    // 1. Coleta de dados do input
    let valorCm = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorCm)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorCm / 30.48;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorCm}cm, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} pés.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Centímetros em Jardas:
// Jarda (yard / yd): 3 pés ou 91,44cm
function calcularParaYard() {
    // 1. Coleta de dados do input
    let valorCm = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorCm)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorCm / 91.44;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorCm}cm, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} jardas.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Quilômetros em Milhas:
// Milha (mile): 1.60934km
function calcularParaMile() {
    // 1. Coleta de dados do input
    let valorKm = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorKm)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorKm / 1.60934;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorKm}km, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} milhas terrestre.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Quilômetros em Milhas:
// Milha Náutica (NM): 1.852km
function calcularParaMilhaNautica() {
    // 1. Coleta de dados do input
    let valorKmNM = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorKmNM)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorKmNM / 1.852;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorKmNM}km, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} milhas náutica.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Gramas em Onça:
// Onça (once / oz): 28,35g
function calcularParaOnce() {
    // 1. Coleta de dados do input
    let valorGrama = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorGrama)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorGrama / 28.349523;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorGrama}g, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} onças.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Quilos em Libra:
// Libra (pound / lb): 16 onças ou 0.45359237kg
function calcularParaPound() {
    // 1. Coleta de dados do input
    let valorKg = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorKg)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorKg / 453.59237;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorKg}kg, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} libras.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Litros em Onça fluida:
// Onça fluida (fluid once / fl oz): 0.0295735L
function calcularParaFluidOnce() {
    // 1. Coleta de dados do input
    let valorLitros = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorLitros)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorLitros * 33.8140227;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorLitros}L, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} onças fluidas.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Litros em Galão:
// Galão (gallon / gal): 3.785411784 litros
function calcularParaGallon() {
    // 1. Coleta de dados do input
    let valorLitrosG = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorLitrosG)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = valorLitrosG / 3.785411784;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorLitrosG}L, equivale: ${valorConvertido.toFixed(2).replace(".", ",")} galões.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}

// Converter Fahrenheit em Graus Celsius:
// Fahrenheit para Graus Celsius: Subtraia por 32 e divide por 1.8
function calcularParaFahrenheit() {
    // 1. Coleta de dados do input
    let valorGrausCelsius = parseFloat(document.getElementById("valorConverter").value);

    // 2. Validação de dados
    if (isNaN(valorGrausCelsius)) {
        msg_resultado.innerHTML = '<span style="color: red;">Informação inválida!</span>';

        msg_resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
        });
        
        return;
    }

    // 3. Cálculos
    let valorConvertido = (valorGrausCelsius * 1.8) + 32;

    // 4. Exibição do resultado
    msg_resultado.innerHTML = `O valor: ${valorGrausCelsius}°C, equivale: ${valorConvertido.toFixed(2).replace(".", ",")}°F.`;

    // Faz a página rolar até o resultado
    msg_resultado.scrollIntoView({
    behavior: "smooth",
    block: "center"
    });

    // 5. Limpar os inputs para o próximo cálculo
    document.getElementById("valorConverter").value = "";
}