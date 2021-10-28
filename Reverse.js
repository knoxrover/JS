const num = 124323;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));
