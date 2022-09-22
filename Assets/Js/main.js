
obtener_localstorage();

function obtener_localstorage() {

  if (localStorage.getItem("haIngresado")) {
    console.log("hola");
   
  }else{

    Swal.fire({
      title: '¿Eres mayor de edad?',
      width: 600,
      padding: '3em',
      color: '#640002',
      background: '#FFF5CE',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      cancelButtonColor: '#008037',
      confirmButtonColor: '#008037',
      html:
        'Al confirmar ser mayor de edad manifiestas tu conformidad con nuestros ' +
        '<a href="/termycond.html" target="_blank">Términos y condiciones</a>' +
        ', nuestro' + '<a onclick="aviso();" target="_blank"> <u>Aviso de Privacidad</u></a>' + ', y uso de cookies.',
      backdrop: `
    rgba(255,169,49,0.8)
    url("/Assets/Img/nyan-cat.gif")
    left top
    no-repeat
    `,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      stopKeydownPropagation: true,
    
    }).then((result) => {
      if (result.isConfirmed) {
        guardar_localstorage()                                       //Yes
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        redirect()
      }
    
    })
    
  }

}





function guardar_localstorage() {

  let haIngresado = "yes";

  localStorage.setItem("haIngresado", haIngresado);

}



//Respuesta No redireccionar a youtube
function redirect() {
  location.href = "https://www.youtube.com/watch?v=k7exgdlVyU0&ab_channel=DossierNet";
}

//aviso de privacidad
function aviso() {
  swal.fire({
    title: "Aviso de privacidad",
    html: "<p>Teléfonos de la oficina de privacidad: 555-55 </p> <br> Correo electrónico: sakachelas.gmail.com <br> <b>Definiciones</b>. <br>Datos personales: Cualquier información concerniente a una persona física identificada o identificable. <br>Titular: La persona física (TITULAR) a quien identifica o corresponden los datos personales. <br>Responsable: Persona física o moral de carácter privado que decide sobre el tratamiento de los datos personales. <br>Tratamiento: La obtención, uso (que incluye el acceso, manejo, aprovechamiento, transferencia o disposición de datos personales), divulgación o almacenamiento de datos personales por cualquier medio. <br>Transferencia: Toda comunicación de datos realizada a persona distinta del responsable o encargado del tratamiento.<br>Derechos ARCO: Derechos de acceso, rectificación, cancelación y oposición. <br>Consentimiento Tácito: Se entenderá que el titular ha consentido en el tratamiento de los datos, cuando habiéndose puesto a su disposición el Aviso de Privacidad, no manifieste su oposición.<br><b>Fines de la información.</b> <br>Sus datos personales serán utilizados para los siguientes fines:<br>Fines de marketing <br>Fines de contacto <br>Fines para conocer requerimientos del proyecto. <br><b>Formas de recabar sus datos personales.</b> <br>Para las actividades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas cuando usted nos los proporciona directamente; cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley. <br><b>Datos personales que se recaban de forma directa.</b><br> Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios. Tales como:<br>Correo electrónico<br<>Nombre completo<br>Teléfono móvil<br>Domicilio<br>Otros<br><b>Uso de cookies.</b><br>En el presente aviso de privacidad se omitirá el uso de cookies, para recabar información sobres usted.<br><b>Información en las Redes Sociales</b><br>Las redes sociales (tales como Facebook y Twitter, entre otras) constituyen una plataforma de comunicación y de interconexión entre plataformas digitales de los distintos usuarios estas son ajenas a Cervexxa, la información que usted proporcione dentro de redes sociales en las que Cervexxa participa como usuario, no constituye ni forma parte de los Datos Personales sujetos a la protección de este Aviso de Privacidad, siendo responsabilidad de la empresa prestadora de esa plataforma y de quien lo publica.",
    icon: "info",
    width: `85%`,
    footer: `<span class="rojo">Esta información es importante</span>`,
    imageUrl: "/Assets/Img/logo.png",
    imageWidth: "200px",

  })
}

function pago(){
  Swal.fire({
      icon: 'success',
      title: 'Pago realizado con éxito.',
      showConfirmButton: false,
      timer: 1500
    })
}
   


