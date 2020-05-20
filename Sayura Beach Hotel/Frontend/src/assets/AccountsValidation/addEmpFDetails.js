function validateEmpFDetails(){
    var empId = document.getElementById('eid');
    var salary = document.getElementById('salary');
    var loan = document.getElementById('bonus');
	var bonus = document.getElementById('loan');

	
		
		if(empId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(salary.value == '')
		{
			alert('Please enter salary');
			return false;
        }
        if(loan.value == '')
		{
			alert('Please enter loan');
			return false;
		}
		if(bonus.value == '')
		{
			alert('Please enter bonus');
			return false;
		}
}