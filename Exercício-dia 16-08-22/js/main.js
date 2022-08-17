function getRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let array = [];
for(i = 0; i < 10; i++){
    array.push(getRandom(-9,9));
}

const negativos = array.filter(x => x < 0);
const positivos = array.filter(x => x > 0);

console.log(array);
console.log(negativos);
console.log(positivos);