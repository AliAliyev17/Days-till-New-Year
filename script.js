var newYear = new Date("01/01/2021");

function setTime() {
	var today = new Date();
	var secDiff = Math.trunc((newYear-today)/1000);
	var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
	var s = Math.trunc(secDiff%60);
	var m = Math.trunc((secDiff/60)%60);
	var h = Math.trunc((secDiff/3600)%24);
	var d = lastDay.getDate()-today.getDate()
	var mon = 11-today.getMonth()
	document.querySelector('#s').innerHTML = s
	document.querySelector('#m').innerHTML = m
	document.querySelector('#h').innerHTML = h
	document.querySelector('#d').innerHTML = d
	document.querySelector('#mon').innerHTML = mon
	console.log("started")
}

setInterval(setTime, 1000)
