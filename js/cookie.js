var cookie_box = document.getElementById('cookie_box'),
activeBtn = document.getElementById('activeBtn');

activeBtn.addEventListener('click',function(){
	
	document.cookie = "CookieBy=InventionTricks; expires=" + new Date(2022,0,1).toUTCString();

	document.cookie = "Name=John; max-age=" + 60*60*24*30;
	document.cookie = "LastName=deo; max-age=" + 60*60*24*30;
	
	if(document.cookie){
		
		cookie_box.classList.add('hide');
	}else{
		
		alert("cookie not set! Please allow this site from your browser cookie setting");
	}

})

function getCookieName(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : '';
}
var getCookieName = getCookieName('CookieBy');

if(getCookieName === 'InventionTricks'){
	
	cookie_box.classList.add('hide');
}