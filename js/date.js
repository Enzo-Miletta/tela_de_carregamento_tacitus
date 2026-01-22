function date(){
	const now = new Date();
	const day = now.getDay();
	const month = now.getMonth();
	let daym = now.getDate();
	const year = now.getFullYear();
	const dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const Digital = new Date();
	const hours = Digital.getHours();
	let minutes = Digital.getMinutes();
	let ampm = "PM";
	let getelement = document.getElementById ? document.getElementById("date") : document.all.date
	
if (hours<12)
ampm="AM"

if (daym<10)
daym="0"+daym

if (minutes<10)
minutes="0"+minutes
	
setTimeout("date()",1000)

getelement.innerHTML=montharray[month]+" "+daym+", "+year+"</br>"+dayarray[day]+" "+hours+":"+minutes+" "+ampm
}

window.onload=date;