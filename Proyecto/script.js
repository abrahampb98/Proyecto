function registro(){
    let nombreInput = document.getElementById('nombres');
    let apellidoInput = document.getElementById('apellidos');
    let telefonoInput = document.getElementById('telefono');
    let idInput = document.getElementById('cedula');
    let emailInput = document.getElementById('correo');
    let domicilioInput = document.getElementById('direccion');

    let nombre= nombreInput.value;
    let apellido= apellidoInput.value;
    let telefono= telefonoInput.value;
    let id= idInput.value;
    let email= emailInput.value;
    let domicilio= domicilioInput.value;

    //alert
    if ( nombre==""){
        alert("Complete el nombre para poder registrarse")
        nombreInput.focus();
        return;
    }

    if ( apellido==""){
        alert("Complete el apellido para poder registrarse")
        apellidoInput.focus();
        return;
    }

    if ( telefono==""){
        alert("Complete el telefono para poder registrarse")
        telefonoInput.focus();
        return;
    }

    if ( id==""){
        alert("Complete la cedula para poder registrarse")
        idInput.focus();
        return;
    }

    if ( email==""){
        alert("complete el correo poder registrarse")
        emailInput.focus();
        return;
    }

    if ( domicilio==""){
        alert("Complete el docimicilio para poder registrarse")
        domicilioInput.focus();
        return;
    }
    //save data
    let customerList = JSON.parse(localStorage.getItem('customerList') || '[]');
    //customer
    let newCustomer = {
        nombre:nombre,
        apellido:apellido,
        cedula:id,
        telefono:telefono,
        email:email,
        domicilio:domicilio
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
    window.location.replace('servicios.html');
}


//API google maps 
function iniciarMap(){
    let coord = {lat:-2.2201494 ,lng: -79.8866849};
    let map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
    let marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}



    