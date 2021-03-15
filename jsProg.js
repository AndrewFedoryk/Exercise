/* Задача про найбільше число.
знайти найбільше число із чисел, які вводить користувач (припинити приймати числа, коли він введе 0)
не враховувати непарні числа (прочитати про команду взяття залишку від ділення - % */

  // Спочатку треба получити числа
  // Припинити получати числа коли буде 0
  //Порівнювати лише парні числа
  //Обирати найбілше
  //Виводити число на екран
let firstUserNumber;
let secondUserNumber;
for (let i = 0; i < 5; ) {
  secondUserNumber = firstUserNumber; 
  firstUserNumber = +prompt('Enter number ');
  if (firstUserNumber == 0) {
    break;
  } else if (firstUserNumber % 2 == 0) {
    firstUserNumber = firstUserNumber;
  } else {
    firstUserNumber = +prompt('Enter number ');
  }
} 

firstUserNumber > secondUserNumber ? console.put('Biggest number ' + firstUserNumber):console.put('Biggest number ' + secondUserNumber);