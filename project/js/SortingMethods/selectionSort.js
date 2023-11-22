//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

async function selectionSort(data) {
	let i, j, min_i;
	arr = data.array;
	n = data.size;
	for (i = 0; i < n-1; i++) {
		min_i = i;
		for (j = i + 1; j < n; j++)
		if (arr[j] < arr[min_i])
			min_i = j;

		swap(arr,min_i, i);
		data.newArray(arr);
		display(data);
		await sleep(SPEED);

	}
}



