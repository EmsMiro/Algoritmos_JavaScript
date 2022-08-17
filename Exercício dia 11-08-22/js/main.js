/*EXERCÍCIO DO DIA 
Zeca tem 1,60 metro e cresce 2 centímetros por ano, enquanto Joaquim tem 1,21 metro e cresce 3 centímetros por ano. 
Elabore um algoritmo que descubra quantos tempo (em anos) Joaquim será maior que Zeca.*/

let ano = 0;
let alturaZeca =1.60;
let alturaJoaquim = 1.21;

while (alturaZeca > alturaJoaquim) { 
    alturaZeca += 0.2;
    alturaJoaquim += 0.3;
    ano++;
}

console.log(`A altura de Zeca foi:${Math.round(alturaZeca)} e a de Joaquim: ${Math.round(alturaJoaquim)} no Ano:${ano}`)