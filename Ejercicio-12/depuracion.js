
function fibonacci(num) {
    //1,1,2,3,5,8
    const fib = [1, 1];
    for (let i = 1; i < num; i++) {
        const numSerie = fib[i] + fib[i - 1];
        fib.push(numSerie);
    }
    return fib;
}
console.log(fibonacci(6));
//posiciones del array
// 0 + 1
// 2 + 1
// 3 + 2
// 4 + 3