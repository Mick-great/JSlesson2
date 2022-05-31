let i = prompt('Введите число');
let g = prompt('Введите число');
let s
if (i && g >= 0) {
    s = (i - g)
    console.log(s);
}
else if (i < 0 || g >= 0) {
    console.log(i * g);
}
else {
    console.log(i + g);
}