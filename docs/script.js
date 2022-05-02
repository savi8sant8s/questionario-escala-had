const app = new Vue({
    el: '#app',
    data(){
        return {
            questoes: [
                {
                    pergunta: 'Eu me sinto tensa(o) ou contraída(o):',
                    alternativas: [
                        { descricao: ' a maior parte do tempo', valor: 3 },
                        { descricao: 'boa parte do tempo', valor: 2 },
                        { descricao: 'de vez em quando', valor: 1 },
                        { descricao: 'nunca', valor: 0 }
                    ],
                },
                {
                    pergunta: 'Eu ainda sinto que gosto das mesmas coisas de antes:',
                    alternativas: [
                        { descricao: 'sim, do mesmo jeito que antes', valor: 0 },
                        { descricao: 'não tanto quanto antes', valor: 1},
                        { descricao: 'só um pouco', valor: 2},
                        { descricao: 'já não consigo ter prazer em nada', valor: 3}
                    ],
                },
                {
                    pergunta: 'Eu sinto uma espécie de medo, como se alguma coisa ruim fosse acontecer:',
                    alternativas: [
                        { descricao: 'sim, de jeito muito forte', valor: 3 },
                        { descricao: 'sim, mas não tão forte', valor: 2},
                        { descricao: 'um pouco, mas isso não me preocupa', valor: 1},
                        { descricao: 'não sinto nada disso', valor: 0}
                    ],
                },
                {
                    pergunta: 'Dou risada e me divirto quando vejo coisas engraçadas:',
                    alternativas: [
                        { descricao: 'do mesmo jeito que antes', valor: 0 },
                        { descricao: ' atualmente um pouco menos', valor: 1},
                        { descricao: 'atualmente bem  menos', valor: 2},
                        { descricao: 'não consigo mais', valor: 3}
                    ],
                },
                {
                    pergunta: 'Estou com a cabeça cheia de preocupações:',
                    alternativas: [
                        { descricao: 'a maior parte do tempo', valor: 3 },
                        { descricao: 'boa parte do tempo', valor: 2},
                        { descricao: 'de vez em quando', valor: 1},
                        { descricao: 'raramente', valor: 0}
                    ],
                },
                {
                    pergunta: 'Eu me sinto alegre:',
                    alternativas: [
                        { descricao: 'nunca', valor: 3 },
                        { descricao: 'poucas vezes', valor: 2},
                        { descricao: 'muitas vezes', valor: 1},
                        { descricao: 'a maior parte do tempo', valor: 0}
                    ],
                },
                {
                    pergunta: 'Consigo ficar sentado à vontade e me sentir relaxada(o):',
                    alternativas: [
                        { descricao: 'sim, quase sempre', valor: 0 },
                        { descricao: 'muitas vezes', valor: 1},
                        { descricao: 'poucas vezes', valor: 2},
                        { descricao: 'nunca', valor: 3}
                    ],
                },
                {
                    pergunta: 'Eu estou lenta(o) para pensar e fazer coisas:',
                    alternativas: [
                        { descricao: 'quase sempre', valor: 3 },
                        { descricao: 'muitas vezes', valor: 2},
                        { descricao: 'poucas vezes', valor: 1},
                        { descricao: 'nunca', valor: 0}
                    ],
                },
                {
                    pergunta: 'Eu tenho uma sensação ruim de medo, como um frio na barriga ou um aperto no estômago:',
                    alternativas: [
                        { descricao: 'nunca', valor: 0 },
                        { descricao: 'de vez em quando', valor: 1},
                        { descricao: 'muitas vezes', valor: 2},
                        { descricao: 'quase sempre', valor: 3}
                    ],
                },
                {
                    pergunta: 'Eu perdi o interesse em cuidar da minha aparência:',
                    alternativas: [
                        { descricao: 'completamente', valor: 3 },
                        { descricao: 'não estou mais me cuidando como eu deveria', valor: 2},
                        { descricao: 'talvez não tanto quanto antes', valor: 1},
                        { descricao: ' me cuido do mesmo jeito que antes', valor: 0}
                    ],
                },
                {
                    pergunta: 'Eu me sinto inquieta(o), como se eu não pudesse ficar parada(o) em lugar nenhum:',
                    alternativas: [
                        { descricao: 'sim, demais', valor: 3 },
                        { descricao: 'bastante', valor: 2},
                        { descricao: 'um pouco', valor: 1},
                        { descricao: 'não me sinto assim', valor: 0}
                    ],
                },
                {
                    pergunta: 'Fico animada(o) esperando animado as coisas boas que estão por vir:',
                    alternativas: [
                        { descricao: 'do mesmo jeito que antes', valor: 0 },
                        { descricao: 'um pouco menos que antes', valor: 1},
                        { descricao: 'bem menos do que antes', valor: 2},
                        { descricao: 'quase nunca', valor: 3}
                    ],
                },
                {
                    pergunta: 'De repente, tenho a sensação de entrar em pânico:',
                    alternativas: [
                        { descricao: 'a quase todo momento', valor: 3 },
                        { descricao: 'várias vezes', valor: 2},
                        { descricao: 'de vez em quando', valor: 1},
                        { descricao: 'não senti isso', valor: 0}
                    ],
                },
                {
                    pergunta: 'Consigo sentir prazer quando assisto a um bom programa de televisão, de rádio ou quando leio alguma coisa:',
                    alternativas: [
                        { descricao: 'quase sempre', valor: 0 },
                        { descricao: 'várias vezes', valor: 1},
                        { descricao: 'poucas vezes', valor: 2},
                        { descricao: 'quase nunca', valor: 3}
                    ],
                }
            ],
            respostas: [],
            observacao: [],
        }                
    },
    methods: {
        calcularResultado(){
            let ansiedade = 0;
            let depressao = 0;
            for(let i = 0; i < this.respostas.length; i++){

                if(i % 2 === 0){
                   ansiedade = ansiedade + this.respostas[i]
                }
                else{
                    depressao = depressao + this.respostas[i]
                } 
            }
            return  resultado = [ansiedade, depressao];
        },
        calcularAnsiedade(resultado){
            if (resultado[0] <= 7) {
                return 'improvável';
            }
            else if (resultado[0] > 7 && resultado[0] <= 11) {
                return 'possível';
            }
            else {
                return 'provável';
            }
        },
        calcularDepressao(resultado){
            if(resultado[1] <= 7){
                return 'improvavel'
            }
            else if (resultado[1] > 7 && resultado[1] <= 11) {
                return 'possível';
            }
            else {
                return 'provável';
            }
        },
        zerarRespostas(){
            this.respostas = [null,null];
        },
        mostrarResultado(){
            const resultado = this.calcularResultado();
            this.observacao = [this.calcularAnsiedade(resultado), this.calcularDepressao(resultado)];
            //alert('Observacao: ' + this.observacao + '[' + resultado +']');
            let div = document.querySelector('.resultado');
            let btn = document.querySelector('.botao-calcular');
            if (div.style.display === 'block') {
                div.style.display = 'none';
                btn.style.display = 'block';
            } else {
                div.style.display = 'block';
                btn.style.display = 'none';
            }
        },
        toggleButton() {
            let total = 0;
            for (let i = 0; i < this.respostas.length; i++) {
                if (this.respostas[i] !== undefined) {  //checa se não tem nenhum espaço vazio no array
                    total = total + 1; //conta quantos itens (respostas) tem no array
                }
            }
            if (total === this.questoes.length) { // checa se o total de respostas é igual ao total de questões
                document.querySelector('.botao-calcular').disabled=false;
                return
            }
        },
    }
})