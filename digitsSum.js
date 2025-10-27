function sumDigits(n) {
  let str = n + ""; // Превращаем число в строку
  let sum = 0;   

  for (let i = 0; i < str.length; i++) { 
    sum = sum + Number(str[i]);  // Превращаем символ обратно в число 
  }
  return sum;
};

console.log(sumDigits(1234)); // Выводит 10