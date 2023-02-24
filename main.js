document.addEventListener("DOMContentLoaded", () => {
    const novoItemInput = document.getElementById("input-novo-item")
    const botaoAdicionarItem = document.getElementsByClassName("botao-adicionar")[0];
    const listaItens = document.getElementsByTagName('ul')[0]

    novoItemInput.addEventListener('input', () => {

        if (novoItemInput.value) {
            botaoAdicionarItem.classList.remove('desativado');
            botaoAdicionarItem.disabled = false;
        } else {
            botaoAdicionarItem.classList.add('desativado');
            botaoAdicionarItem.disabled = true;
        }
    })

    botaoAdicionarItem.addEventListener("click", (e) => {
        e.preventDefault();
        adicionarItem(novoItemInput.value)
    })

    const adicionarItem = (texto) => {
        const item = document.createElement('li');
        const input = document.createElement('input');
        input.disabled = true;
        input.value = texto;

        const containerBotoes = document.createElement('div');
        const botaoEditar = document.createElement('button');
        const botaoApagar = document.createElement('button');
        
        botaoEditar.innerText = "Editar";
        botaoApagar.innerText = "Apagar";
        
        botaoEditar.classList.add('botao-editar');
        botaoApagar.classList.add('botao-apagar');

        botaoApagar.addEventListener('click', () => {
            botaoApagar.parentNode.parentNode.remove()
        })

        containerBotoes.append(botaoEditar);
        containerBotoes.append(botaoApagar);

        item.append(input);
        item.append(containerBotoes);

        listaItens.append(item);

        // Limpa o input de novo item
        novoItemInput.value = ""
        // Desativa o botão
        botaoAdicionarItem.disabled = true;
        botaoAdicionarItem.classList.add('desativado');
    }

    const botoesApagar = document.getElementsByClassName('botao-apagar');

    for (let botao of botoesApagar) {
        botao.addEventListener('click', () => {
            botao.parentNode.parentNode.remove()
        })
    }
})
