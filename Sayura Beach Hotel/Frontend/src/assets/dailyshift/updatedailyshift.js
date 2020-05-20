function validateUpdateShift(){
	var NIC = document.getElementById('NIC');
    var time = document.getElementById('time');
    var date = document.getElementById('date');
	var section = document.getElementById('section');
	var position = document.getElementById('position');
	var BTNINS = document.getElementById('btnins');
	
		
		if(NIC.value == '')
		{
			BTNINS.disabled = true;
		}
		else if(time.value == '')
		{
			BTNINS.disabled = true;
		}
        else if(date.value == '')
		{
			BTNINS.disabled = true;
		}
		else if(section.value == '')
		{
			BTNINS.disabled = true;
		}
		else if(position.value == '')
		{
			BTNINS.disabled = true;
		}
		else{
			BTNINS.disabled = false;
		}
		
	
}

