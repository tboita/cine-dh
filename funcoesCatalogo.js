const catalogo = require("./catalogo");

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz
    };
    catalogo.push(novoFilme);
    console.log("Parabéns! O filme foi adicionado com sucesso.");
    
}

function buscarFilme(codigo){
    const filmeProcurado = catalogo[codigo - 1];
    if(!filmeProcurado){
        return console.log("Código não encontrado");
    }
    console.log(filmeProcurado);

}
buscarFilme(1);

function alterarStatusEmCartaz(codigo, novoStatus){
const filmeProcurado = catalogo[codigo -1];

if(!filmeProcurado){
    return console.log("código não encontrado");
}
catalogo[codigo -1].emCartaz = novoStatus;
console.log("Filme Alterado!")
}

const listarCatalogo =(emCartaz)=>{
for(let i=0; i<=1; i++){
    return console.log("Não encontrado!")
}

}
let listarFilmesEmCartaz = () => {
let filmes = [];
for(let i = 0; i < catalogo.length; i++){
(catalogo[i].emCartaz == true ? filmes.push(catalogo[i]): " ");
    }

    
    console.table(filmes,["titulo", "duracao", "atores"])
}