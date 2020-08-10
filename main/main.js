const formulario = document.getElementById('formulario');
const inputs  = document.querySelectorAll('#formulario input');
console.log(inputs);
const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


formulario.addEventListener('submit', (e)=>{ //Linea de código para EVITAR EL ENVIO del formulario.
    e.preventDefault();
});
const validateField = (expresion, input, campo) =>{
    if(expresion.test(input.value)){ 
        console.log("correcto");
        console.log(document.querySelector(`#group_${campo} i`));
        document.getElementById(`${campo}`).classList.remove('form_group-incorrect');
        document.getElementById(`${campo}`).classList.add('form_group-corret');
        document.querySelector(`#group_${campo} .form_input-error`).classList.remove('form_input-error-activo');
        // document.querySelector(`#group_${campo} i`).classList.add('fa-check-circle');
    }else{
        console.log("incorrecto");
        document.getElementById(`${campo}`).classList.add('form_group-incorrect');
        document.getElementById(`${campo}`).classList.remove('form_group-corret');
        document.querySelector(`#group_${campo} .form_input-error`).classList.add('form_input-error-activo');
        // document.querySelector(`#group_${campo} i`).classList.remove('fa-check-circle');
        // document.querySelector(`#group_${campo} i`).classList.add('fa-times-circle');
    }

}
const validateForm = (e) =>{
    switch(e.target.name){
        case 'name':
            validateField(expresiones.nombre, e.target, e.target.name);
            break;
        case 'lastname':
            validateField(expresiones.nombre, e.target, e.target.name);
            break;
        case 'email':
            validateField(expresiones.correo, e.target, e.target.name);
            break;
        case 'password':
            validateField(expresiones.password, e.target, e.target.name);
            break;
        case 'password2':
            validateField(expresiones.password, e.target, e.target.name);
            break;
    }
}
inputs.forEach((input) => { //Asignar evento - funcion
	input.addEventListener('keyup', validateForm); //Validar cuando se presiona una tecla
	input.addEventListener('blur', validateForm); 
});

