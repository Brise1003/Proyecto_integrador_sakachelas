
// Validation

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos
	direccion: /^[a-zA-ZÀ-ÿ\s\d]{1,70}$/, // Letras, espacios y numeros, pueden llevar acentos
	telefono: /^\d{10}$/, // 10 numeros
	numero: /^[a-zA-Z\d]{1,5}$/,
	cp: /^\d{5}$/
}

const campos = {
	nombre: false,
	apellidoP: false,
	apellidoM: false,
	correo: false,
	direccion: false,
	numero: false,
	ciudad: false,
	cp: false,
	colonia: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombres, e.target, 'nombre');
		break;
		case "apellidoP":
			validarCampo(expresiones.nombres, e.target, 'apellidoP');
		break;
		case "apellidoM":
			validarCampo(expresiones.nombres, e.target, 'apellidoM');
		break;
		case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
		case "ciudad":
			validarCampo(expresiones.nombres, e.target, 'ciudad');
		break;
		case "cp":
			validarCampo(expresiones.cp, e.target, 'cp');
		break;
		case "colonia":
			validarCampo(expresiones.nombres, e.target, 'colonia');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
}}

const validarCampo = (expresion, input, campo)=>{
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	}else{
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	if(campos.nombre && campos.apellidoP && campos.direccion && campos.numero && campos.ciudad && campos.cp && campos.colonia && campos.telefono){
// 		formulario.reset();
// 	}
// })



