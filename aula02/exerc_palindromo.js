document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("meuBotao").addEventListener("click", () => {

        function verificarPalindromo(frase) {

            let palavraFormatada = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[\W_]/g, '');
            return palavraFormatada === palavraFormatada.split("").reverse().join("");
        }

        function verificar() {
            let palavra = document.getElementById("palavra").value;

            if (verificarPalindromo(palavra)) {
                alert("é um palíndromo!");
            } else {
                alert("não é um palíndromo!");
            }
        }
        exibir();
    });
}); 
