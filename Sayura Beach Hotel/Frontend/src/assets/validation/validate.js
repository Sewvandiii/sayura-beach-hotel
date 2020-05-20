function addvehicle(){
	var id = document.getElementById('id');
	var vehicle = document.getElementById('vehicle');
	var model = document.getElementById('mod');
	var license = document.getElementById('license');
	var passengers = document.getElementById('passengers');
	var year = document.getElementById('year');
	var colour = document.getElementById('colour');
	var BtnAId = document.getElementById('btnAdd')
		
		if(id.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(vehicle.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(model.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(license.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(passengers.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(year.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(colour.value == '')
		{
			BtnAId.disabled=true;
		}
		else
		{
			BtnAId.disabled=false;
		}	
		
	
}
function  printVeh(){
	window.print();
}




