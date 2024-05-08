let weekDays = ['Domingo', 'Segunda', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const currentDay = new Date();

const currentWeekDay = currentDay.getDay();
const showDay = weekDays[currentWeekDay];
console.log(showDay);