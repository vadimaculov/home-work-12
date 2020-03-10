console.log(console.log);

let arr = ['HTML', 11, 'JavaScript', 2, 'CSS', 23, 12];

arr.push(-28);
arr.unshift(1000);
arr.push("Last array element");
arr.splice(3,1);
numArr = arr.filter(function(el) {
    return typeof el === 'number'
});

arr2 = numArr.map(function(el) {
    return el*el;
})

alert( Math.max.apply(null, arr2) );