const content = document.getElementById('content');

function getXmlHttpObject() {
    var xmlHttp = null;  
    try {  
        xmlHttp = new XMLHttpRequest(); 
    } catch (e) {
        try  { 
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {                          
			try {  
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  
			} catch (e) { 
                alert('Browser does not support Ajax!');
				return null;
			}                   
        }   
    }
	return xmlHttp;
}

function getContent() {
    var xhr = getXmlHttpObject();
    xhr.open('GET', 'https://itest.com.vn/lects/webappdev/ajax/abc.htm', true);
    xhr.send();
    xhr.onreadystatechange = function () {        
        content.innerHTML = xhr.responseText;
    }
}