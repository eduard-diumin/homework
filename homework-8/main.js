function getPow(num, degree) {
    if (degree === 0) {
        return 1
    } 
    if (degree % 2 === 0) {
        let halfDegree = getPow(num, degree / 2)
        return halfDegree * halfDegree
    } 

    return num * getPow(num, degree - 1);
}

console.log(getPow(2, 2));

// If big value use this
// console.log(BigInt(getPow(2, 10)));