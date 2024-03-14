const array = [1, 2, 3, 4, 5, 6, 7];


// this func modifies an existing array
function removeElement(array, item)  {
    const itemIndex = array.indexOf(item);
    if (itemIndex !== -1) return array.splice(itemIndex, 1); 
}

// this func create new array without a selected element
function removeItem(array, itemToRemove) {
    return array.filter(item => item !== itemToRemove)
}

const newArr = removeItem(array, 7);
removeElement(array, 5);

console.log(newArr);
console.log(array);

    
