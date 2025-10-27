function divideNumbers(n, k) { 

  let wholePart = Math.floor(n / k);   // Находим целую часть деления
  let remainder = n % k;   // Найдём остаток от деления

  return wholePart + " " + remainder; // Возвращаем в нужном формате
}

console.log(divideNumbers(10, 3)); // Выводит: "3 1"