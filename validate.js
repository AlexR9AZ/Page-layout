functuon validate() {
	var pw1 = document.getElementById("pass1");
	var pw2 = document.getElementById("pass2");
	if(pw1.value == pw2.value) {
		return true;
	}
alert("Пароли должны совпадать !");
return false;
}