function validateUpdateEquipment(){
	var NIC = document.getElementById('NIC');
	var BTNINS = document.getElementById('btnins');
			
		
		if(NIC.value == '')
		{
			BTNINS.disabled = true;
		}
        
        else if(date.value == '')
		{
			BTNINS.disabled = true;
		}
		else if(quantity.value == '')
		{
			BTNINS.disabled = true;
		}
		else if(price.value == '')
		{
			BTNINS.disabled = true;
		}
		else{
			BTNINS.disabled = false;
		}
		
	
}