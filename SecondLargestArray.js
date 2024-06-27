function findSecondLargest(arr) {
    //checking the size of an array 
    console.log("Length of given array is =" + arr.length)

    //checking the given array is vaild are invalid 
    if (arr.length < 2) {
        return "Invalid array"
    }

    //sorting the given array
    a = arr.sort()
    console.log("After sorting the array " + a)

    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] !== arr[arr.length - 1]) {
            return "The second largest element is " + arr[i];
        }
    }
    return "There is no second largest element";

}
console.log(findSecondLargest([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))