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

        // Botoes EDITAR e APAGAR
        const containerBotoesEditarApagar = document.createElement('div');
        const botaoEditar = document.createElement('button');
        const botaoApagar = document.createElement('button');
        
        botaoEditar.innerText = "Editar";
        botaoApagar.innerText = "Apagar";


        containerBotoesEditarApagar.classList.add('container-botoes')
        botaoEditar.classList.add('botao-editar');
        botaoApagar.classList.add('botao-apagar');

        botaoApagar.addEventListener('click', () => {
            botaoApagar.parentNode.parentNode.remove()
        })
        
        containerBotoesEditarApagar.append(botaoEditar);
        containerBotoesEditarApagar.append(botaoApagar);


        // Botoes SALVAR e CANCELAR
        const containerBotoesSalvarCancelar = document.createElement('div');
        const botaoSalvar = document.createElement('button');
        const botaoCancelar = document.createElement('button');
        
        botaoSalvar.innerText = "Salvar";
        botaoCancelar.innerText = "Cancelar";
        
        botaoSalvar.classList.add('botao-salvar');
        botaoCancelar.classList.add('botao-cancelar');

        containerBotoesSalvarCancelar.append(botaoSalvar);
        containerBotoesSalvarCancelar.append(botaoCancelar);
        containerBotoesSalvarCancelar.classList.add('container-botoes-edicao', 'esconder-botoes')

        // Anexa elementos no item
        item.append(input);
        item.append(containerBotoesEditarApagar);
        item.append(containerBotoesSalvarCancelar);

        // Configura botao de EDICAO
        botaoEditar.addEventListener('click', () => {
            const input = botaoEditar.parentNode.parentNode.getElementsByTagName('input')[0];
            input.disabled = false;

            const fimInput = input.value.length;
            input.setSelectionRange(fimInput, fimInput);
            input.focus();

            const botoesSalvarCancelar = botaoEditar.parentNode.parentNode.getElementsByClassName('container-botoes-edicao')[0];

            botoesSalvarCancelar.classList.remove('esconder-botoes');
            botaoEditar.parentNode.classList.add('esconder-botoes');

            const conteudoItem = input.value;
            const botaoCancelar = botoesSalvarCancelar.getElementsByClassName('botao-cancelar')[0];

            botaoCancelar.addEventListener('click', () => {
                input.value = conteudoItem;
                input.disabled = true;

                botoesSalvarCancelar.classList.add('esconder-botoes');
                botaoEditar.parentNode.classList.remove('esconder-botoes');
            })

            botaoSalvar.addEventListener('click', () => {

                const input = botaoSalvar.parentNode.parentNode.getElementsByTagName('input')[0];
                input.disabled = true;
    
                const botoesEditarApagar = botaoSalvar.parentElement.parentElement.getElementsByClassName('container-botoes')[0];
    
                const botoesEdicao = botaoSalvar.parentElement.parentElement.getElementsByClassName('container-botoes-edicao')[0];
            
                botoesEdicao.classList.add('esconder-botoes');
                botoesEditarApagar.classList.remove('esconder-botoes');
            })
        })

        listaItens.append(item);

        // Limpa o input de novo item
        novoItemInput.value = ""
        // Desativa o botão
        botaoAdicionarItem.disabled = true;
        botaoAdicionarItem.classList.add('desativado');
    }


    // Configuração dos botões existentes
    const botoesApagar = document.getElementsByClassName('botao-apagar');
    for (let botao of botoesApagar) {
        botao.addEventListener('click', () => {
            botao.parentNode.parentNode.remove()
        })
    }

    // Configuração dos botões existentes
    const botoesEditar = document.getElementsByClassName('botao-editar');
    for (let botao of botoesEditar) {
        botao.addEventListener('click', () => {
            const input = botao.parentNode.parentNode.getElementsByTagName('input')[0];
            input.disabled = false;

            
            const fimInput = input.value.length;
            input.setSelectionRange(fimInput, fimInput);
            input.focus();

            const botoesEdicao = botao.parentNode.parentNode.getElementsByClassName('container-botoes-edicao')[0];

            botoesEdicao.classList.remove('esconder-botoes');
            botao.parentNode.classList.add('esconder-botoes');


            const conteudoItem = input.value;
            const botaoCancelar = botoesEdicao.getElementsByClassName('botao-cancelar')[0];

            botaoCancelar.addEventListener('click', () => {
                input.value = conteudoItem;
                input.disabled = true;

                botoesEdicao.classList.add('esconder-botoes');
                botao.parentNode.classList.remove('esconder-botoes');
            })
        })
    }

    // Configuração dos botões existentes
    const botoesSalvar = document.getElementsByClassName('botao-salvar');
    for (let botao of botoesSalvar) {
        botao.addEventListener('click', () => {

            const input = botao.parentNode.parentNode.getElementsByTagName('input')[0];
            input.disabled = true;

            const botoesEditarApagar = botao.parentElement.parentElement.getElementsByClassName('container-botoes')[0];

            const botoesEdicao = botao.parentElement.parentElement.getElementsByClassName('container-botoes-edicao')[0];
        
            botoesEdicao.classList.add('esconder-botoes');
            botoesEditarApagar.classList.remove('esconder-botoes');
        })
    }
})

