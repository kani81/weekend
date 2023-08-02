var date=new Date();
var a=date.getDay();
document.write("Given a="+a+"<br><br>")
if((a==0)&&(a==6)){
	document.write(a+"this date is week end")
}
else{
	document.write(a+"this date is not week end")
}