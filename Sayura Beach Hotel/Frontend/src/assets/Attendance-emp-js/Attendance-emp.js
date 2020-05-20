function validateAtten(){
    var AempId = document.getElementById('AempId');
    var Adate = document.getElementById('Adate');
    var Astatus = document.getElementById('Astatus');
	
	
		
		if(AempId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(Adate.value == '')
		{
			alert('Please enter the date');
			return false;
        }
        if(Astatus.value == '')
		{
			alert('Please enter employee attendance status');
			return false;
		}
		
		
	
}
function validateAtenBtn(){
	var AempId = document.getElementById('AempId');
    var Adate = document.getElementById('Adate');
	var Astatus = document.getElementById('Astatus');
	var BtnId = document.getElementById('btnAtt');

	if(AempId.value == '')
	{
		BtnId.disabled=true;
	}
	else if(Adate.value == '')
	{
		BtnId.disabled=true;
	}
	else if(Astatus.value == '')
	{
		BtnId.disabled=true;
	}
	else{
		BtnId.disabled = false;
	}

}