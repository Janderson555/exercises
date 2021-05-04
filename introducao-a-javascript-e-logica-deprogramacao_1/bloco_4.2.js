let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Soma todos números da variavel "numbers".
let somaNumbers = 0;

for (indexSoma = 0; indexSoma < numbers.length; indexSoma ++){
    somaNumbers = somaNumbers + numbers[indexSoma];
};

console.log (somaNumbers);
//.

// Tira a média da variavel "numbers".

let media = somaNumbers / (numbers.length);

console.log (media);

// .