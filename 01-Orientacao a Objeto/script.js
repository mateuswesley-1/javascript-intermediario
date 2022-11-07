function Pencil(color, length){
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
}

// quando criamos a instância da classe, o this. se 
// refere ao próprio objeto instanciado, e as propriedades são referentes a esse objeto
var meuLapis = new Pencil('red', 15)

//Nesse caso, é como se estivessemos exercutando uma 
// função normal, meuLapis2 terá o valor retornado 
// nessa função, que no caso é Undefined

//Nesse caso this é uma variável do escopo global
var meuLapis2 = Pencil('red', 15)