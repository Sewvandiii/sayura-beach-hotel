function validateupdate(){
	var id = document.getElementById('id');
	var vehicle = document.getElementById('vehicle');
	var model = document.getElementById('model');
	var license = document.getElementById('license');
	var passengers = document.getElementById('passengers');
	var year = document.getElementById('year');
	var colour = document.getElementById('colour');
	
		
		if(id.value == '')
		{
			alert('Please Enter Vehicle ID');
			return false;
		}
		if(id.value == '')
		{
			alert('Please Enter Vehicle');
			return false;
		}
		if(model.value == '')
		{
			alert('Please Enter Vehicle Model');
			return false;
		}
		if(license.value == '')
		{
			alert('Please Enter License No');
			return false;
		}
		if(passengers.value == '')
		{
			alert('Please Enter No Of Passengers');
			return false;
		}
		if(year.value == '')
		{
			alert('Please Enter Manufactured Year');
			return false;
		}
		if(colour.value == '')
		{
			alert('Please Enter Vehicle Colour');
			return false;
		}
	
		
	
}