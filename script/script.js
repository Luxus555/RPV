'use strict'

let money = prompt('Ваш месячный доход?', 50000),
  income = 500,
  addExpenses = prompt('Перечислите возможные расходы за расчитываемый период через запятую', "Квартплата, проездной, кредит"),
  deposit = confirm('Есть ли у Вас депозит в банке?', false),
  expenses1 = prompt('Введите обязательную статью расходов?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдётся?'),
  amount2 = +prompt('Во сколько это обойдётся?'),
  mission = 100000,
  period = 12,
  budgetMonth = money - amount1 - amount2,
  budgetDay = budgetMonth / 30,
  target = mission/budgetMonth;

  if (budgetDay > 0 && budgetDay < 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay < 0) {
    console.log('Что-то пошло не так');
  }

console.log(Math.floor(budgetDay));
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " фунтов");
console.log('Цель будет достигнута за ' + Math.ceil(target) + ' месяцев');
console.log(addExpenses.toLowerCase().split(", "));
console.log(budgetDay);
