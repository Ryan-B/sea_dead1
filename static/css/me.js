function flipp(arr) {
	var temp;

	for (var i = arr.length - 1; i >= arr.length/2; i--) {
		temp = arr[i];
		arr[i] = arr[arr.length - i -1];
		arr[arr.length - i -1] = temp;
	};
	console.log(arr)
}
flipp([0,2,4]);