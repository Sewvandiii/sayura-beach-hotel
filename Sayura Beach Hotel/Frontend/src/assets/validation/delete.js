function validatedelete(){
	var id = document.getElementById('id');
    var BtnDel = document.getElementById('btnDEL')
		
		if(id.value == '')
		{
            BtnDel.disabled=true;
        }
		else
		{
			BtnDel.disabled=false;
		}
	
		
	
}