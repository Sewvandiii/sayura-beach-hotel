function validateWork(){
    var WId = document.getElementById('WId');
    var WDate = document.getElementById('WDate');
    var WTime = document.getElementById('WTime');
	var Ftime = document.getElementById('Ftime');
    var Htime = document.getElementById('Htime');
    var Otime = document.getElementById('Otime');
	
		
		if(WId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(WDate.value == '')
		{
			alert('Please enter the date');
			return false;
        }
        if(WTime.value == '')
		{
			alert('Please enter employee working time');
			return false;
		}
		if(Ftime.checked == false && Htime.checked == false && Otime.checked == false)
		{
			alert('Please choose employee working time status');
			return false;
		}
		
	
}

function validateWorkTime(){

	var WTime = document.getElementById('WTime');
	var Ftime = document.getElementById('Ftime');
    var Htime = document.getElementById('Htime');
    var Otime = document.getElementById('Otime');
	if(WTime.value == 9){
		Ftime.disabled=false;
		Htime.disabled=true;
		Otime.disabled=true;
	}
	else if(WTime.value < 9){
		Ftime.disabled=true;
		Htime.disabled=false;
		Otime.disabled=true;
	}
	else{
		Ftime.disabled=true;
		Htime.disabled=true;
		Otime.disabled=false;
	}
}
function validateworkBtn(){
	var WId = document.getElementById('WId');
    var WDate = document.getElementById('WDate');
    var WTime = document.getElementById('WTime');
	var Ftime = document.getElementById('Ftime');
    var Htime = document.getElementById('Htime');
	var Otime = document.getElementById('Otime');
	var btnWId = document.getElementById('btnWork');

	if(WId.value == '')
		{
			btnWId.disabled = true;
		}
		else if(WDate.value == '')
		{
			btnWId.disabled = true;
        }
        else if(WTime.value == '')
		{
			btnWId.disabled = true;
		}
		else if(Ftime.checked == false && Htime.checked == false && Otime.checked == false)
		{
			btnWId.disabled = true;
		}
	else{
		btnWId.disabled = false;
	}

}