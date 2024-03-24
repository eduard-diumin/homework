function getSum() {
    let total = 0; 

    return function(num) {
        total += num; 
        return total; 
    };
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
