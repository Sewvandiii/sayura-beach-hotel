

function validatestockdetails(){
    var NIC = document.getElementById('nic');
    var telephone = document.getElementById('telephone');
    var supCategory = document.getElementById('supCategory');
	var quantity = document.getElementById('quantity');
	var orderedDate = document.getElementById('orderedDate');
	var prurchasedDate = document.getElementById('purchasedDate');
		
		if(NIC.value == '')
		{
			alert('Please enter NIC');
			return false;
		}
		if(telephone.value == '')
		{
			alert('Please enter telephoneNo');
			return false;
        }
        if(supCategory.value == '')
		{
			alert('Please enter employee supcategory');
			return false;
		}
		if(quantity.value == '')
		{
			alert('Please enter quantity');
			return false;
		}
		if(orderedDate.value == '')
		{
			alert('Please enter orderedDate');
			return false;
		}
		if(prurchasedDate.value == '')
		{
			alert('Please enter purchasedDate');
			return false;
		}
		
	
}