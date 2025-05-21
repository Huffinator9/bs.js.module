// for loops
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
	console.log(i + " is an even number.");
    }
}

// multiplication table
for (let i = 1; i <= 5; i++){
    let row = "";
    for (let j = 1; j <= 5; j++){
	row += (i * j) + "||";
    }
    console.log(row);
}
