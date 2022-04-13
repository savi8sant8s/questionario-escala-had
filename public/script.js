const app = new Vue({
    el: '#app',
    data(){
        return {
            questoes: [
                {
                    pergunta: 'O que você faz?',
                    alternativas: [
                        { descricao: 'Faz nada', valor: 1 },
                        { descricao: 'Faz algo', valor: 2 },
                        { descricao: 'Faz outra coisa', valor: 3 },
                        { descricao: 'Faz muito', valor: 4 }
                    ],
                },
                {
                    pergunta: 'O que você não faz?',
                    alternativas: [
                        { descricao: 'Faz tudo', valor: 1 },
                        { descricao: 'Faz cuscuz', valor: 2},
                        { descricao: 'Faz comida', valor: 3},
                        { descricao: 'Faz quase nada', valor: 4}
                    ],
                }
            ],
            respostas: [null,null],
        }
    },
    methods: {
        calcularResultado(){
            const valorInicial = 0;
            return this.respostas.reduce((acumulador, resposta) => {
                return acumulador + resposta;
            }, valorInicial);
        },
        calcularObservacao(resultado){
            if (resultado <= 2) {
                return 'Libélula';
            } else {
                return 'Vagalume';
            }
        },
        zerarRespostas(){
            this.respostas = [null,null];
        },
        mostrarResultado(){
            const resultado = this.calcularResultado();
            const observacao = this.calcularObservacao(resultado);
            alert('Observacao: ' + observacao);
        }
    }
})