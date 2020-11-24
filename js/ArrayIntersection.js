var intersection = function (nums1, nums2) {
  var same = [];
  for (i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!same.includes(nums1[i])) same.push(nums1[i]);
      }
    }
  }
  return same;
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
