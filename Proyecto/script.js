function registro(){
    var nombre=document.getElementById('nombres').value;
    var apellido=document.getElementById('apellido').value;
    var celular=document.getElementById('telefono').value;
    var id=document.getElementById('cedula').value;
    var email=document.getElementById('correo').value;
    var domicilio=document.getElementById('direccion').value;
    if ( nombre==""){
        alert("Complete todos los datos para poder registrarse")
        document.getElementById("nombres").focus();
    }else{
        if ( apellido==""){
            alert("Complete todos los datos para poder registrarse")
            document.getElementById("apellidos").focus();
        }else{
            if ( celular==""){
                alert("Complete todos los datos para poder registrarse")
                document.getElementById("telefono").focus();
            }else{
                if ( id==""){
                    alert("Complete todos los datos para poder registrarse")
                    document.getElementById("cedula").focus();
                }else{
                    if ( email==""){
                        alert("Complete todos los datos para poder registrarse")
                        document.getElementById("correo").focus();
                    }else{
                        if ( domicilio==""){
                            alert("Complete todos los datos para poder registrarse")
                            document.getElementById("direccion").focus();
                        }
                    }
                }
            }
        }
    }
    console.log(nombre+" "+apellido+" "+celular+" "+id+" "+email+" "+domicilio)

}