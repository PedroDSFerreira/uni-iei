//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

async function insertionSort(data) {  
	let i, key, j;
	arr = data.array;
	n = data.size;

	for (i = 1; i < n; i++) {  
		key = arr[i];  
		j = i - 1;  

		while (j >= 0 && arr[j] > key) {  
			arr[j + 1] = arr[j];  
			j = j - 1;  
		}  
		arr[j + 1] = key; 

		data.newArray(arr);
		display(data);
		await sleep(SPEED);
	}  
}