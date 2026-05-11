//1. Declare 5 variáveis para representar uma viagem (destino, nome do viajante, cidade d origem, duração em dias e meio de transporte).
//2. Organizar uma forma   de imprimir esses valores com interpolcao ou saída individual.
// Nota: Ao faazer interpolacao, inserir crase

const destino = "Letonia";
const nomeViajante = "Franklin";
const cidadeOrigem = "Curitiba";
let duracao = 23;
let transporte = "Avião";

console.log(`O viajante ${nomeViajante} deseja viajar de ${cidadeOrigem} até ${destino} de ${transporte} em um percurso de ${duracao} horas.`);


//3. Crie duas variáveis com o detino da passagem, hospedagem e alimentação.
//4. Exiba uma soma dos valores.

let custoDaPassagem = 3800;
let hospedagem = 900;
let alimentacao = 200;

let total = custoDaPassagem +  hospedagem + alimentacao;

console.log("O total dos gastos será: R$" + total + "total.")
