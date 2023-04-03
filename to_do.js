document.addEventListener("DOMContentLoaded", () => {
    const novoItemInput = document.getElementById('new-item');
    const BotaoAdd = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    const tasks = [];

    BotaoAdd.addEventListener('click', () => {

        if (novoItemInput.value) {
            
            const novoItem = document.createElement('li');
            const taskNome = document.createElement('span');
            taskNome.innerText = " " + novoItemInput.value + " ";

            const botaoEditar = document.createElement('button');
            botaoEditar.innerText = 'Editar';
            botaoEditar.addEventListener('click', () => {
                const newTask = prompt('Digite a nova tarefa:', taskNome.innerText);
                if (newTask !== null) {
                    taskNome.innerText = newTask;
                }
            });

            const botaoExcluir = document.createElement('button');
            botaoExcluir.innerText = 'Excluir';
            botaoExcluir.addEventListener('click', () => {
                todoList.removeChild(novoItem);
                tasks.splice(tasks.indexOf(novoItem), 1);
            });

            const botaoMover = document.createElement('button');
            botaoMover.innerText = 'Mover';
            botaoMover.addEventListener('click', () => {
                const indiceAtual = tasks.indexOf(novoItem);
                if (indiceAtual > 0) {
                    tasks.splice(indiceAtual, 1);
                    tasks.splice(indiceAtual - 1, 0, novoItem);
                    todoList.insertBefore(novoItem, todoList.children[indiceAtual - 1]);
                }
            });

            tasks.push(novoItem);

            novoItem.appendChild(taskNome);
            novoItem.appendChild(botaoEditar);
            novoItem.appendChild(botaoMover);
            novoItem.appendChild(botaoExcluir);

            todoList.appendChild(novoItem);

            novoItemInput.value = '';
        }
    });
});