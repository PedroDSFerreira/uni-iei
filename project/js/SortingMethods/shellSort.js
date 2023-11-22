//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

async function shellSort(data) {
	let gap,i,j,temp
	arr = data.array;
	n = data.size;
  
	for (gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
		for (i = gap; i < n; i += 1) {
			temp = arr[i];
			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
				arr[j] = arr[j - gap];
			arr[j] = temp;
		}
		
		data.newArray(arr);
		display(data);
		await sleep(SPEED);
	}
}