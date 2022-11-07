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