//вивести на екран квадратик із зірочок, розмір квадрата задається юзером.

//запитати у кристувача розмір квадрту
//вивести на екран кількість зірочок
//Через кількість яку ввів корисувач переходити на новий рядк
//повторювати поки кількість не буде відповідна до кількості введеної користувачем
let userSquareSize = +prompt("What size should the square be??");

// for (let i = 0; i < userSquareSize; i++) {
//   for (let j = 0; j < userSquareSize; j++) {
//     console.put("*");
//   }
//   console.put("\n");
// }
let i = 0;
while (i < userSquareSize){
    let j = 0;
    while (j < userSquareSize){
        console.put('*');
        j++;
    }
    console.put("\n");
    i++;

}