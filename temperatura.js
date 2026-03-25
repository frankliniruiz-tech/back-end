const cidade = "Curitiba";
const tempCelcius = 19;

const tempFarhrenheit = tempCelcius * (9 / 5) + 32;
const tempKelvin = tempCelcius + 273.15;
const variacaoDiaria = 23.3 - tempCelcius;

console.log (`A temperatura em ${cidade} está ${tempCelcius}Cº`);
console.log  (`\nCelcius: ${tempCelcius} Cº`);
console.log (`Fahrenheit: ${tempFarhrenheit} Fº`);
console.log (`Kelvin: ${tempKelvin} Kº`);
console.log (`Variação  previstas: ${variacaoDiaria}`);

