document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("meuBotao").addEventListener("click", () => {
        function Automoveis() {
            let marca;
            let modelo;
            let cor;
            let kmetragem;
            let ano;
            let valor_tabela_fipe;

            this.setAno = function (valorAno) {
                this.ano = valorAno;
            }
            this.getAno = function () {
                return this.ano;
            }

            this.setKmetragem = function (valorKmetragem) {
                this.kmetragem = valorKmetragem;
            }
            this.getKmetragem = function () {
                return this.kmetragem;
            }

            this.setValor_fipe = function (vValor_fipe) {
                this.valor_fipe = vValor_fipe;
            }
            this.getValor_fipe = function () {
                return this.valor_fipe;
            }

            this.anosUtilizacao = function () {
                let dataAtual = new Date();
                let yyyy = dataAtual.getFullYear();
                let utilizacao = yyyy - this.ano;
                return utilizacao;
            }
            this.valorMercado = function () {
                let valor;
                switch (true) {
                    case (this.kmetragem <= 30000):
                        valor = 1.1 * this.valor_Fipe;
                        break;
                    case (this.kmetragem <= 50000):
                        valor = this.valor_fipe;
                        break;
                    default:
                        valor = 0.9 * this.valor_fipe;
                }
                return valor;
            }
        }

        function Calcular() {
            let a1 = new Automoveis()

            let marca = document.getElementById("marca").value;
            let modelo = document.getElementById("modelo").value;
            let cor = document.getElementById("cor").value;
            let ano = document.getElementById("ano").value;
            let km = document.getElementById("kmetragem").value;
            let valor_fipe = document.getElementById("valor_fipe").value;

            a1.setAno(ano);
            a1.setKmetragem(km);
            a1.setValor_fipe(valor_fipe);

            let utilizacao = a1.anosUtilizacao();
            let valor_mercado = a1.valorMercado();

            document.getElementById("marca_2").innerHTML = marca;
            document.getElementById("modelo_2").innerHTML = modelo;
            document.getElementById("cor_2").innerHTML = cor;
            document.getElementById("ano_2").innerHTML = ano;
            document.getElementById("utilizacao").innerHTML = utilizacao;
            document.getElementById("valor_mercado").innerHTML = valor_mercado;
        }
        Calcular();
    });
});
