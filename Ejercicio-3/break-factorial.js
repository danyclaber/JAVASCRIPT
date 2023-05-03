
let sw = 0;
let i = 10;
let f = 1;
while (sw == 0) {
    f = f * i;
    i--;
    if (i == 1) {
        break;
    }
}
console.log(f);