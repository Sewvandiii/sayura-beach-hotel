function validateEquipment(){
    var eqp = document.getElementById('eNIC');
    var date = document.getElementById('edate');
    var quantity = document.getElementById('quantity');
	var price = document.getElementById('price');
	var BTNINS = document.getElementById('btnins');
		
		if(eNIC.value == '')
		{
			BTNINS.disabled = true;
		}
        
        else if(edate.value == '')
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