
class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque = "";
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
function main() {

    const mago = new Heroi("Mago Negro", 150, "Mago");
    const guerreiro = new Heroi("Hercules", 35, "Guerreiro");
    const monge = new Heroi("Jack-chan", 45, "Monge");
    const ninja = new Heroi("Magno", 30, "Ninja");

    mago.atacar();        
    guerreiro.atacar();  
    monge.atacar();      
    ninja.atacar();       
}

main();

