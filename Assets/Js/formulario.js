const formulario = document.getElementById('singUp');
const inputs = document.querySelectorAll('#singUp input')

 const  expresiones  =  {
 	usuario : /^[a-zA-Z0-9\_\-]{ 4,16}$/,  // Letras, numeros, guion y guion_bajo
 	nombre : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  // Letras y espacios, pueden llevar acentos.
 	contraseña : /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,  // 4 a 12 dígitos.
 	correo : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 	telefono : /^\d{7,14}$/  // 7 a 14 numeros.
 }

 const campos = {
  nombre: false,
  apellido: false,
  correo: false,
  password: false
 }

const validarFormulario = (e) => {
  switch(e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "apellido":
      validarCampo(expresiones.nombre, e.target, 'apellido');
    break;
    // case "fecha":
      
    // break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
    break;
    case "password":
      validarCampo(expresiones.contraseña, e.target, 'password');
      validarPassword2();
    break;
    case "password2":
      validarPassword2();
    break;
  }
}


const validarCampo = (expresion, input, campo) =>{
  if(expresion.test(input.value)){
    document.getElementById(`group__${campo}`).classList.remove('form__group-incorrecto');
    document.getElementById(`group__${campo}`).classList.add('form__group-correcto');
    document.querySelector(`#group__${campo} i`).classList.add('bi-check-circle-fill');
    document.querySelector(`#group__${campo} i`).classList.remove('bi-x-circle-fill');
    document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-activo');
    campos[campo] = true;
  }else{
    document.getElementById(`group__${campo}`).classList.add('form__group-incorrecto');
    document.getElementById(`group__${campo}`).classList.remove('form__group-correcto');
    document.querySelector(`#group__${campo} i`).classList.add('bi-x-circle-fill');
    document.querySelector(`#group__${campo} i`).classList.remove('bi-check-circle-fill');
    document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-activo');
    campos[campo] = false;
  } 
}


const validarPassword2 = () =>{
  const inputPassword1 = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  if(inputPassword1.value !== inputPassword2.value){
    document.getElementById(`group__password2`).classList.add('form__group-incorrecto');
    document.getElementById(`group__password2`).classList.remove('form__group-correcto');
    document.querySelector(`#group__password2 i`).classList.add('bi-x-circle-fill');
    document.querySelector(`#group__password2 i`).classList.remove('bi-check-circle-fill');
    document.querySelector(`#group__password2 .form__input-error`).classList.add('form__input-error-activo');
    campos['password'] = false;
  } else{
    document.getElementById(`group__password2`).classList.remove('form__group-incorrecto');
    document.getElementById(`group__password2`).classList.add('form__group-correcto');
    document.querySelector(`#group__password2 i`).classList.remove('bi-x-circle-fill');
    document.querySelector(`#group__password2 i`).classList.add('bi-check-circle-fill');
    document.querySelector(`#group__password2 .form__input-error`).classList.remove('form__input-error-activo');
    campos['password'] = true;
  }
}

inputs.forEach((input)=>{
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();

  // const conf = document.getElementById('confirma');
  if(campos.nombre && campos.apellido && campos.correo && campos.password /*&& conf.cheked*/){
  formulario.reset();

  // document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');

}
});














//  formulario.addEventListener('submit', (e) => {
//    e.preventDefault();

//    const confirmacion = document.getElementById('confirmacion');
//    if(campos.nombre && campos.apellido && campos.correo && campos.password && confirmacion.checked) {
//      formulario.reset();

  
//      document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
//      setTimeout(() => {
//        document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
//      }, 5000);
 
//      document.querySelectorAll('.form__group-correcto').forEach((icono) => {
//        icono.classList.remove('form__group-correcto');
//      });
 		
    
//    }else{
//      document.getElementById('form__mensaje').classList.add('form__mensaje-activo')
//    }
//   })
  











// Funcion para mostrar contraseña


  function mostrarPassword(){
      var cambio = document.getElementById("password");
      if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
      }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
      }
    } 
    

 


  function mostrarPassword2(){
      var cambio = document.getElementById("password2");
      if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
      }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
      }
    } 
    



