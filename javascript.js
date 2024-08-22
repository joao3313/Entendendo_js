/* Informe se um aluno esta aprovado,de recuperação ou reprovado, seguindo os seguintes critérios:
Informar 3 notas
media >6: Aprovado
media<4: Reprovado.

Obs use o prompte exiba os resultados em alert.
*/
alert("Alerta de Confirmação!");

var nome1 = "";
let nota1, nota2, nota3 = 0;
const quantidadeProvas = 3;
 
nome1 = prompt("Digite o Nome do Aluno 1:");
nota1 = parseFloat(prompt("Digite a Nota 1 do Aluno 1: "));
nota2 = parseFloat(prompt("Digite a Nota 2 do Aluno 1: "));
nota3 = parseFloat(prompt("Digite a Nota 3 do Aluno 1: "));


 
var media1 = 0;
media1 = (nota1 + nota2 + nota3 ) / quantidadeProvas;

 
var mensagem = `
${nome1}, sua média é ${media1}, parabéns!  
${nome2}, sua média é ${media2}, parabéns!`;
 
alert(mensagem);
