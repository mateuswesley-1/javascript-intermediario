function Pencil(color, length){
    //variaveis privadas: como não estamos usando o this
    // essa variável não será visível numa instancia do objeto
    var code = 153



    // nesse caso, significa que esquecemos de usar o
    // New, então fazemos a função retornar o objeto
    // invez de undefined
    if(!(this instanceof Pencil)) {
        return new Pencil(color, length);
    }
    this.color = color;
    this.length = length;
    this.write = function(text){
        console.log(text)
    }

    // criando método para acessarmos variáveis
    //privadas.

    // dessa forma podemos import restrições para
    // as alterações que podem ser feitas, coisa
    // que não seria possível com propriedades normais
    this.getCode = function(){
        return code
    }

    this.changeCode = function(value){
        if(Number.isInteger(value)){
            code = value
        }else{
            code = Math.round(value)
        }
        
    }
}

// quando criamos a instância da classe, o this. se 
// refere ao próprio objeto instanciado, e as propriedades são referentes a esse objeto
var meuLapis = new Pencil('red', 15)

//Nesse caso, é como se estivessemos exercutando uma 
// função normal, meuLapis2 terá o valor retornado 
// nessa função, que no caso é Undefined

//Nesse caso this é uma variável do escopo global
var meuLapis2 = Pencil('red', 15)

// cria uma propriedade nova para todas as 
//instâncias de Pencil, pois altera o prototype de Pencial, os métodos que qualquer instância herda da Classe
Pencil.prototype.number = 5

//meuLapis.number === meuLapis2.number --> 5


// Herança //

function Polly(ponta = .5){
    this.ponta = ponta
    this.tamanho_ponta = 1
    
    this.usar_ponta = function(){
        this.tamanho_ponta *= 0.9
    }
    this.trocar_ponta = function(){
        this.tamanho_ponta = 1
    }
}

// prototype é um objeto que possui todas as propriedades que Polly herda

// quando fazemos essa igualdade, o prototype de Polly passa a ser Pencial
Polly.prototype = new Pencil('red', 2)

var Polly_1 = new Polly()