

function validate(){
    var empId = document.getElementById('empId');
    var empName = document.getElementById('empName');
    var empNic = document.getElementById('nic');
	var empAge = document.getElementById('empAge');
	var empBirth = document.getElementById('empBirth');
	var empMob = document.getElementById('empMob');
    var empJd = document.getElementById('empJd');
    var empPos = document.getElementById('empPos');
    var empPass = document.getElementById('empPass');
	var genderM = document.getElementById('genderM');
	var genderF = document.getElementById('genderF');
	var marry = document.getElementById('marry');
	var Unmarry = document.getElementById('Unmarry');
	
		
		if(empId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(empName.value == '')
		{
			alert('Please enter employee name');
			return false;
        }
        if(empNic.value == '')
		{
			alert('Please enter employee NIC/Passport');
			return false;
		}
		if(empAge.value == '')
		{
			alert('Please enter employee age');
			return false;
		}
		if(empBirth.value == '')
		{
			alert('Please enter employee birth day');
			return false;
		}
		if(empMob.value == '')
		{
			alert('Please enter employee mobile number');
			return false;
		}
		if(empJd.value == '')
		{
			alert('Please enter employee joined date');
			return false;
        }
        if(empPos.value == '')
		{
			alert('Please enter employee position');
			return false;
        }
        if(empPass.value == '')
		{
			alert('Please enter employee password');
			return false;
		}
		if(genderM.checked == false && genderF.checked == false)
		{
			alert('Please choose employee gender');
			return false;
		}
		if(marry.checked == false && Unmarry.checked == false)
		{
			alert('Please choose employee married status');
			return false;
		}
		
	
}
function validateAddBtn(){
	var empId = document.getElementById('empId');
    var empName = document.getElementById('empName');
    var empNic = document.getElementById('nic');
	var empAge = document.getElementById('empAge');
	var empBirth = document.getElementById('empBirth');
	var empMob = document.getElementById('empMob');
    var empJd = document.getElementById('empJd');
    var empPos = document.getElementById('empPos');
    var empPass = document.getElementById('empPass');
	var genderM = document.getElementById('genderM');
	var genderF = document.getElementById('genderF');
	var marry = document.getElementById('marry');
	var Unmarry = document.getElementById('Unmarry');
	var BtnAId = document.getElementById('btnAdd');


		if(empId.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(empName.value == '')
		{
			BtnAId.disabled=true;
        }
        else if(empNic.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(empAge.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(empBirth.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(empMob.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(empJd.value == '')
		{
			BtnAId.disabled=true;
        }
        else if(empPos.value == '')
		{
			BtnAId.disabled=true;
        }
        else if(empPass.value == '')
		{
			BtnAId.disabled=true;
		}
		else if(genderM.checked == false && genderF.checked == false)
		{
			BtnAId.disabled=true;
		}
		else if(marry.checked == false && Unmarry.checked == false)
		{
			BtnAId.disabled=true;	
		}
		else{
		BtnAId.disabled=false;
		}
}
function printEmp(){
	window.print();
	
}