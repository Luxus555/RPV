let num = 266219,
  arr = num.toString().split('').reduce(function(a,b) {
    return a * b;
  })
    console.log(String(arr ** 3).slice(0, 2));
