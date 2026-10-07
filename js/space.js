//criando um contexto para a tela do jogo receber desenho 2D
const telaJogo = document.getElementById('telaJogo').getContext('2d')
// recuperando elementos html pelo id
const tiro = document.getElementById('somTiro')
const modal = document.getElementById('Modal')
const mensagemModal = document.getElementById('mensagemModal')
const botaoContinuar = document.getElementById('botaoContinua')
const botaoTerminar = document.getElementById('botaoTerminar')
//molde chamado obj
class obj{

//metodo constructor é usado para inicializar um objeto criado
// a partir de uma classe
    constructor(posx,posy,largura,altura,cor){
        this.posx = posx//inicializa a pos x do obj
        this.posy = posy//inicializa a pos y do obj
        this.altura = altura//inicializa a propriedade largura
        this.largura = largura//inicializa a propriedade altura
        this.cor = cor// define a cor de preenchimento do obj
    }
    //criando metodo desenhar para classe obj
    desenhar(){
        //define a cor de preenchimento do obj
        telaJogo.fillStyle = this.cor
        //desenha um retangulo com as dimensões especificadas
        //metodo fillrect faz desenho 2d
        telaJogo.fillRect(this.posx, this.posy, this.altura, this.largura, this.cor)
    }

    atualizar() {


        this.posx += this.velocidade

        this.posy = Math.max(0, Math.min(this.posx, telaJogo.width - this - this.largura))

    }

    move(direcao){

        const velocidade = 5;

        this.velocidade = direcao === 'esquerda'?-velocidade:velocidade
    }

    parar(){


        this.velocidade = 0
    }

    perdervida(){
        this.vidas--


        document.getElementById('vidas').innerText = 'Vidas: $(this.vidas)'

        if(this.vida === 0){

            localStorage.setItem('vidas',3)

            exibirModal('Voce perdeu! Game Over', false)
        }

    }

    }




