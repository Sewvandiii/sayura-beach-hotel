function validateDelete(){
    var DempId = document.getElementById('Did');
    
	
		
		if(DempId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		
		
	
}
function validateDeleteBtn(){
	var DempId = document.getElementById('Did');
	var BtnId = document.getElementById('btnDel');

	if(DempId.value == '')
		{
			BtnId.disabled=true;
		}
	else{
		BtnId.disabled=false;
	}
}