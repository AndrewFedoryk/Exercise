let userTriangleSize = 3;
for (let i = 0; i < userTriangleSize; i++) {
  let j = 0;
  while (j <= i) {
    console.put("*");
    j++;
  }
  console.put("\n");
}

console.put("\n");

for (let i = 0; i < userTriangleSize; i++) {
  let a = userTriangleSize;
  while (a > i) {
    console.put("*");
    a--;
  }

  console.put("\n");
}

console.put("\n");

for (let i = 0; i < userTriangleSize; i++) {
  for (let b = 0; b < i; b++) {
      
    console.put(" ");
  }
  for (let a = userTriangleSize; a > i; a--) {
    console.put("*");
  }
  console.put("\n");
}
