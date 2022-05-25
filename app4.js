let a = +prompt('Введите число');
let b = +prompt('Введите число');
let c
if (a && b >= 0) {
    c = (a - b)
    alert(c);
}
else if (a < 0 || b >= 0) {
    alert(a * b);
}
else {
    alert(a + b);
}