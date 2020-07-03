// Cargar Datos de Usuario
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
  ultimoDi();
           }

          var ultimoDiez = document.getElementById( "uldi");
          ultimoDiez.addEventListener("click", ultimoDi);
         
         var ultimaHora = document.getElementById( "ulho");
         ultimaHora.addEventListener("click", ultimaHo);
 
         /* var ultimaVei = document.getElementById( "ulvei");
         ultimaVei.addEventListener("click", ultimaVe); */
      

 /* CAMBIAR GRAFICAS  */
 var tiempoMuestreo;
 var  cantidadDatos;
var tiempoAtras;
var restaTiempo;
var titulo;
var inter;
var conteo;


function  ultimoDi(){
  clearInterval(inter); 
 tiempoMuestreo = 10000;
 cantidadDatos = 59;
 restaTiempo = 9;
 titulo = 'Ultimos 10 minutos';
 conteo = 10;
  grafica(cantidadDatos,restaTiempo,titulo, conteo);
 } 
 function  ultimaHo(){
    clearInterval(inter);  
  tiempoMuestreo = 5000;
 cantidadDatos = 59;
 restaTiempo = 60;
 titulo = 'Ultima hora';
 conteo = 62;
   grafica(cantidadDatos,restaTiempo,titulo, conteo);
 } 
 
 function  ultimaVe(){
  clearInterval(inter);  
tiempoMuestreo = 5000;
cantidadDatos = 100;
restaTiempo = 500;
titulo = 'Ultimo día';
conteo = 552;
 grafica(cantidadDatos,restaTiempo,titulo, conteo);
} 

 

/* Funcion para graficar */ 
function grafica(cantidadDatos,restaTiempo,titulo, conteo ){

  function horaDiezMiAntes() {
var horasdma;
var minudma =0;
var segminudma=0;
var horasDimiantes=0;
var diasAntes=0;
var fecha2  =new Date();
if(restaTiempo<10){
 /*  diasAntes = fecha2.getDate(); */
   horasdma = fecha2.getHours();
  minudma = fecha2.getMinutes()-10;
  segminudma = fecha2.getSeconds();
  horasDimiantes = diasAntes*3600*24 + horasdma*3600 + minudma*60 +segminudma
}
if(restaTiempo>10 && restaTiempo<61){
  /* diasAntes = fecha2.getDate(); */
    horasdma = fecha2.getHours();
  minudma = fecha2.getMinutes()-60;
  segminudma = fecha2.getSeconds();
  horasDimiantes = diasAntes*3600*24 + horasdma*3600 + minudma*60 +segminudma
  console.log('ultima hora')
}
if(restaTiempo>62 && restaTiempo<1441){
  /* diasAntes = fecha2.getDate(); */
    horasdma = fecha2.getHours()-24;
  minudma = fecha2.getMinutes();
  segminudma = fecha2.getSeconds();
  horasDimiantes = diasAntes*3600*24 + horasdma*3600 + minudma*60 +segminudma
  console.log('ultima hora')
}

        return horasDimiantes
}

var segundosDma = horaDiezMiAntes();


/* /* convertir segundo a hora:minutos:segundos */
function secondsToString(seconds) {
  /* var dias = Math.floor(seconds / (3600*24));
  dias = (dias < 10)? '0' + dias : dias; */
  var hour = Math.floor(seconds / 3600);
  hour = (hour < 10)? '0' + hour : hour;
  var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return  /* dias+ ':' */+hour + ':' + minute + ':' + second;
  
}
 
/* CREACION DE ARREGLOS PARA GRAFICA */
var arreglox =[];
for (let i=0;i<=cantidadDatos;i++) { 
  arreglox[i]=secondsToString(segundosDma+conteo*i);
}
console.log(arreglox);
  var arregloy = [];
    for (let i=0;i<=cantidadDatos;i++) { 
   arregloy[i]=(Math.random())*1000+200;
}
/* DATOS DE LA GRAFICA */
var traceA = {
  x: arreglox,
  y: arregloy,
  type: 'scatter'
    }
    console.log(traceA);
var data =[traceA];

/* DISEÑO DE LA GRAFICA */
  var layout = {
title: titulo,

font: {
  family: 'Lato',
  size: 16,
  color: 'rgb(0,0,0)'
},

xaxis: {
  
  autorange: true,
  titlefont: {
    color: 'black',
    size: 25
  },
  rangemode: 'tozero',
}, 

yaxis: {
  title: 'CONSUMO EN GWATTS',
  titlefont: {
    color: 'black',
    size: 25
  },
  rangemode: 'tozero'
   }

}; 
Plotly.newPlot( 'chart', data, layout, [0]);

  inter = setInterval(function(){
     /* var fecha3  =new Date();  */
    var dia = fecha3.getDate();
    var hor = fecha3.getHours();
     var minu = fecha3.getMinutes();
     var seg = fecha3.getSeconds();  
var horasA
        horasA =/* dia +':' */ + hor + ':' + minu + ':' + seg;
        var ale = (Math.random())*1000+200;
        arregloy.shift();
        arregloy.push(ale)
        arreglox.shift();
        arreglox.push(horasA)
        var traceA = {
          x: arreglox,
          y: arregloy,
          type: 'scatter'
         }
         var data =[traceA];
      
         
    Plotly.newPlot('chart',data,layout, [0]);
   
 
  },10000); 
}





  