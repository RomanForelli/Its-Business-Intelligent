

const formRegistro = document.getElementById("contenedor-formulario");

const datitos = []

formRegistro.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const comentario = document.getElementById('comentario').value;

    const datos = {

        usuario: nombre,
        mail: email,
        telefono: telefono,
        comentario: comentario
    };

    datitos.push(datos);

    console.log(datitos);

    localStorage.setItem('formularioContacto', JSON.stringify(datos));

    let datosFormulario = JSON.parse(localStorage.getItem('formularioContacto'));
    
    console.log(datosFormulario);

} );

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const comentario = document.getElementById('comentario');

email.addEventListener('blur', () => {

    if(email.value.length > 0 && email.value.includes ('@') && email.value.includes ('.')){

        const error = document.getElementById('errorEmail');
        error.innerHTML = '<h6 class="text-light"> Email completo </h6>';
    } else {

        const error = document.getElementById('errorEmail');
        error.innerHTML = '<h6 class="text-danger"> Email incompleto o con errores </h6>';
    }

})

telefono.addEventListener('blur', () => {

    if(telefono.value.length > 0 && !isNaN(telefono.value)){

        const error = document.getElementById('errorTelefono');
        error.innerHTML = '<h6 class="text-light"> Telefono completado </h6>';
    } else {
        
        const error = document.getElementById('errorTelefono');
        error.innerHTML = '<h6 class="text-danger"> Telefono incompleto o con errores </h6>';
    }

})

nombre.addEventListener('blur', () => {
    
    if( nombre.value.length > 0 && (/^[A-Z ]+$/i.test(nombre.value))){

        const error = document.getElementById('errorNombre');
        error.innerHTML = '<h6 class="text-light"> Nombre completado </h6>';

    } else {

        const error = document.getElementById('errorNombre');
        error.innerHTML = '<h6 class="text-danger"> Nombre incompleto o con errores </h6>';

    }

})

comentario.addEventListener('blur', () => {
    
    if( comentario.value.length > 0 ){

        const error = document.getElementById('errorComentario');
        error.innerHTML = '<h6 class="text-light"> Comentario completado </h6>';

    } else {

        const error = document.getElementById('errorComentario');
        error.innerHTML = '<h6 class="text-danger"> Comentario incompleto o con errores </h6>';

    }

})







