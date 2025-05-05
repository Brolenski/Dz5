function sumInput() {
  const numbers = [];

  while (true) {
    let input = prompt("Введіть число:");

    if (input === null || input.trim() === "" || isNaN(input)) {
      break;
    }

    numbers.push(+input);
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return `Введені числа: ${numbers.join(", ")}\nСума: ${sum}`;
}