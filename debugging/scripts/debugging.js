const pi = 3.14;
// let radius = 3;
let area = 0;
area = circleArea(3);
console.log("Area1:", area);
// radius = 4;
area = circleArea(4);
console.log("Area2:", area);

function circleArea(radius) {
    const area = radius * radius * pi;
    return area;
}