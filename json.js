
//Json criado
let invoice = {
    name: "Magno",
    age: "35",
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99]
    },

    taxes: "98.90"
}

//Execução da função
generateInvoice(invoice)

//Função criada
function generateInvoice(invoice){
    console.log(`O comprador é  ${invoice.name}`)
    console.log(`A idade é  ${invoice.age}` )
    console.log("-----------------------------------------------")

    //ler os dados da lista em Json
    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(`${productsName}: R$ ${productsPrice}`)
    }

}