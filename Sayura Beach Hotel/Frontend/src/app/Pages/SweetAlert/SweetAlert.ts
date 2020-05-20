import Swal from 'sweetalert2';

export class SweetAlert{
    constructor(position,type,titt,showConfirm,timer){
        this.displayAlert(position,type,titt,showConfirm,timer);
    }
    displayAlert(position,type,titt,showConfirm,timer){
        Swal.fire({
            position: position,
            type: type,
            title: titt,
            showConfirmButton: showConfirm,
            timer: timer
          });
    }

}

