const sum_to_n_a = (n) => {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
};

const sum_to_n_b = (n) => {
	if (n === 1) return 1;

	return n + sum_to_n_b(n - 1);
};

const sum_to_n_c = (n) => {
	return (n * (n + 1)) / 2;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
