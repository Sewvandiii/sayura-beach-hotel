function validateDeleteEquipment(){
    var NIC = document.getElementById('NIC');
	var BTNINS = document.getElementById('btnins');
		
	if(NIC.value == '')
	{
		BTNINS.disabled = true;
	}	
	else{
		BTNINS.disabled = false;
	}
}