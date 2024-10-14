let rankPartidas = resultadoPartidas(100, 50)
console.log(`O Herói tem saldo de ${rankPartidas.saldo} e está no nível ${rankPartidas.nivel}`)

function resultadoPartidas(vitorias, derrotas){
    let resultado = vitorias - derrotas
    let nivel = ""

    if(resultado < 10){
        nivel = "Ferro"
    } else if (resultado >= 10 && resultado <= 20){
        nivel = "Bronze"
    } else if (resultado >= 21 && resultado <= 50){
        nivel = "Prata"
    } else if (resultado >= 51 && resultado <= 80){
        nivel = "Ouro"
    } else if (resultado >= 81 && resultado <= 90){
        nivel = "Diamante"
    } else if(resultado >= 91 && resultado <= 100){
        nivel = "Lendário"
    } else if (resultado >= 101){
        nivel = "Imortal"
    } else {
        nivel = "Sem dados"
    }

    return { saldo: resultado, nivel: nivel }
}
