function registro(){
    let sucursalInput = document.getElementById('sucursal');
    let diaInput = document.getElementById('dia');


    let sucursal= sucursalInput.value;
    let dia= diaInput.value;


    //alert
    if ( sucursal==""){
        alert("Escoja una locación")
        nombreInput.focus();
        return;
    }

    if ( dia==""){
        alert("Escoja un horario")
        apellidoInput.focus();
        return;
    }

    
    //save data
    let customerList = JSON.parse(localStorage.getItem('customerList') || '[]');
    //customer
    let newCustomer = {
       sucursal:sucursal,
       dia:dia
    };
    //push
    customerList.push(newCustomer);
    //falsy truly values
    localStorage.setItem('customerList',JSON.stringify(customerList));
    //clear inputs
    nombreInput.value = '';
    apellidoInput.value = '';
    idInput.value = '';
    telefonoInput.value = '';
    emailInput.value = '';
    domicilioInput.value = '';
    alert('registro exitoso');
    window.location.replace('PaginaServicios.html');
}





