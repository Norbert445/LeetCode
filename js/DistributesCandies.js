var distributeCandies = function (candies) {
  let even = candies.length / 2;
  let i = 0;
  const different = [...new Set(candies)];
  return Math.min(different.length, candies.length / 2);
};
console.log(distributeCandies([4, 8, 4, 5, 69, 69]));
