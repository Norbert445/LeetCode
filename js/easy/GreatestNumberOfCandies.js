var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  let arr = [];
  for (i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  return arr;
};
