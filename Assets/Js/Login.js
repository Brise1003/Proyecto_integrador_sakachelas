function mostrarPassword(){
	var cambio = document.getElementById("txtPassword");
	if(cambio.type == "password"){
		cambio.type = "text";
		$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
	}else{
		cambio.type = "password";
		$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
	}
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
	$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});



// Validation

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	password:  /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
	
	titular: /^[a-zA-ZÀ-ÿ\s]{1,70}$/, // Letras y espacios, pueden llevar acentos
	tarjeta: /^\d{16,20}$/, // 16 a 20 numeros.
	cvv: /^\d{3,4}$/ // 3-4 numeros.
}

const campos = {
	titular: false,
	password: false,
	correo: false,
	tarjeta: false,
	cvv: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "titular":
			validarCampo(expresiones.titular, e.target, 'titular');
		break;
		case "tarjeta":
			validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
		break;
		case "cvv":
			validarCampo(expresiones.cvv, e.target, 'cvv');
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


formulario.addEventListener('submit', (e) => {
	e.preventDefault();


})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

});


//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09',
'10', '11', '12'];

//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "01";
})();



function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 11; i++){
        const option = document.createElement("option");
        option.textContent = year + i;
        yearSelect.appendChild(option);
    }
}

populateYears();
