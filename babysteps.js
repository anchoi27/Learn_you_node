function sum(arg) {
	var total = 0;
	if (arg.length > 2){
		for (var i = 2; i < arg.length; i++){
			total += Number(arg[i]);
		}
		return ""+total;
	}
	return "";
}

console.log(sum(process.argv));