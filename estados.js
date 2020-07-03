 
 function cargarDatosL(){
  const usuarios = document.getElementById('nombre');
  const correos = document.getElementById('correo');
  const idens = document.getElementById('iden');
  let username = JSON.parse(localStorage.getItem('Usuario'));
  
  console.log(username);
     if(username === null ){
      usuarios.textContent = "Nombre";
      correos.textContent = "Correo";
      idens.textContent = "Id electry";
    
     }else{
      usuarios.textContent = username[0].usuario;
      idens.textContent = username[0].identificacion;
 /* correos.textContent = username[0].correo; */
    }
 /*   document.getElementById('indicador').innerHTML='<i>MULTIPLICA</i> ';*/  
}

//Fecha y Hora
var dia = ["Domingo", "Lunes", "Martes","Miercoles","Jueves","Viernes","Sábado"];
var mes = ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var id;
var h = 0;
var m = 0;
var s = 0;

function fintervalo(){
  var fecha  =new Date();
    document.getElementById("Fecha").innerHTML = ((dia[(fecha.getDay())])+" "+fecha.getDate()+" de "+mes[(fecha.getMonth())]+ " del " +fecha.getFullYear());
 var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  var sega;
  var  mina;
  var hoa;
  var amp;
  if (segundos<10){sega="0"+segundos;}else{sega=segundos;}
  if (minutos<10){mina="0"+minutos;}else{mina=minutos;}
  if (horas<10){hoa="0"+horas;}else{hoa=horas;}
  if (fecha.getHours()>12){amp = "p.m.";}else{amp = "a.m."}

  document.getElementById("Hora").innerHTML =(hoa+":"+mina+":"+sega+" "+amp);
 
}


/* Cuando cargue la pagina corre lo que esta dentro de la página */

window.onload = function() {
   cargarDatosL();
  var intervalo = setInterval(fintervalo, 1000);
           }
 
 /* EstadoS */
 
 
 function  iniciandoMaquina(){
  var ini= document.getElementById("texto");
  ini.innerHTML=' <h4> INICIANDO </h4> <img src="/Img/operacionNormal.jpg">';
}

  function  operacionNormal(){
    var ini= document.getElementById("texto");
    ini.innerHTML=' <h4> OPERACION NORMAL </h4>  <img src="/Img/alerta.png">';
  }

  function  arreglando(){
    var ini= document.getElementById("texto");
    ini.innerHTML=' <h4> ARREGLANDO </h4> <img src="Img/reparacion.png" >';
  }

  var rep= document.getElementById("re");
  rep.addEventListener("click", arreglando); 
  var op= document.getElementById("onor");
  op.addEventListener("click", operacionNormal); 
  var iniciar= document.getElementById("ini");
  iniciar.addEventListener("click", iniciandoMaquina);