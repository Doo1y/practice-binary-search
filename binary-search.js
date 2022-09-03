function linearSearch(arr, target) {
  // Can you solve this in one line?
  return arr.includes(target) ? target : -1;
};

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1;
  let low = 0;
  let mid = Math.floor((high + low) / 2);
  // While high and low indices do not overlap...
  while (low !== mid && high !== mid) {

    // Find the midpoint between high and low indices
    mid = Math.floor((high + low) / 2);

    // If the target equals the midpoint...
    // Return the midpoint index
    if (target === arr[mid]) return mid;


    // If the target is higher than the midpoint...
    // Move the low pointer to midpoint + 1
    if (target > arr[mid]) low = mid + 1;

    // If the target is less than the midpoint...
    // Move the high pointer to midpoint - 1
    if (target < arr[mid]) high = mid - 1;

  }
  // Return -1 if the loop exits with overlapping pointers
  return -1
}



module.exports = [linearSearch, binarySearch]