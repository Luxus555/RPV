let money = 1500,
  income = 500,
  addExpenses = "Аренда, Интернет, Газ",
  deposit = false,
  mission = 10000,
  period = 12,
  budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " фунтов");
console.log(addExpenses.toLowerCase().split(", "));
console.log(budgetDay);
