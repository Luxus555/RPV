let num = 266219,
  arr = [],
  sNumber = num.toString();

for (let i = 0, len = sNumber.length; i < len; i += 1) {
  arr.push(+sNumber.charAt(i));
}

console.log(arr);
