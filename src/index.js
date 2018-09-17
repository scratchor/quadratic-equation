module.exports = function solveEquation(equation) {
  // your implementation
  let D;
  let x1;
  let x2;
  let toOrder = function (a, b) {
    return a - b;
  }
  let arrCheck = equation.split('*');
  let arr = equation.split(' ');
  if(arrCheck.length === 3) {
    let a = arr[0];
    let b = arr[3] + arr[4];
    let c = arr[7] + arr[8];
    D = b*b - 4*a*c;
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    arr = [];
    arr.splice(0, 0, Math.round(x1), Math.round(x2));
    return (arr.sort(toOrder));
  }
}
