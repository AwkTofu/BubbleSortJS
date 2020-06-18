console.log("Starting Bubble Sort");

var arr = [4,2,3,5,1]

function bubbleSort(unsortedArray) {
	let length = unsortedArray.length;

	for (let i = 0; i < length; i++)
	{
		for (let j = 0; j < length; j++)
		{
			if (unsortedArray[j] > unsortedArray[j + 1])
			{
				let temp = unsortedArray[j];
				unsortedArray[j] = unsortedArray[j + 1];
				unsortedArray[j + 1] = temp;
			}
		}
	}

	return unsortedArray;
}

console.log("Before: " + arr);
console.log("Result: " + bubbleSort(arr));
console.log("After: " + arr);