function agendar() {
    const nome = document.getElementById('nome').value;
    const dataInput = document.getElementById('data').value; // Valor original do input (yyyy-mm-dd)
    const hora = document.getElementById('hora').value;

    if (!nome || !dataInput || !hora) {
        alert('Por favor, preencha todos os campos para agendar.');
        return;
    }    
    
    // --- Lógica para formatar a data ---
    
    // 1. Criar um objeto Date a partir da string yyyy-mm-dd
    const [ano, mes, dia] = dataInput.split('-');
    
    // 2. Formatar no padrão brasileiro dd/mm/aaaa
    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    // --- Fim da lógica de formatação ---

    const lista = document.getElementById('listaAgendamento');
    const item = document.createElement('p');
    // Usar a data formatada na string de saída
    item.textContent = `${nome} agendado para ${dataFormatada} às ${hora}`; 
    lista.appendChild(item);

    document.getElementById('nome').value = '';
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
}