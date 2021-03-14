// вивести на екран ялинку такого розміру, який вказує користувач


//   *
//  ***
// *****
//   *
// вивести на екран зірку яка буде по центру і з боків будуть відступи
// далі вивести на екран 2 зірки у яких буде одинаква(тобто завжди повинна залишатись парна кількість) відстань з боківно
// повторюват розширючи середину доки не зникнуть відступи
// знову пункт 1.


// 
let userCristmasTree = +prompt("Enter what size of cristmas tree you want! ");
for (let i = 0; i <= userCristmasTree; i++) {
  for (let a = userCristmasTree; a >= i; a--) {
    console.put(" ");
  }

  for (let g = 0; g < i; g++) {
    console.put("*");
    for (let b = 0; b < g; b++) {
      if (b == 1) {
        break;
      }
      console.put("*");
    }
  }

  console.put("\n");
  if (i == userCristmasTree)   {
    let c = 0;
    while (c < userCristmasTree) {
      console.put(" ");
      c++;
      if (c == userCristmasTree) {
        console.put("*");
      }
    }
  }
}
