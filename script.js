document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var parametros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let newHTML = '<div><input type="text" class="parametro" placeholder="parametro"><input type="number" class="valor" placeholder="valor"></div>'; 
    document.querySelector(".container").innerHTML = html + newHTML;
} 


function showResults(){
    for (var i = 0; i < document.querySelectorAll('.parametro').length ; i++) {
      parametros.push(document.querySelectorAll('.parametro')[i].value);
      valores.push(parseInt(document.querySelectorAll(".valor")[i].value));
    }
    var data = [{
      x: parametros,
      y: valores,
      type: "scatter",
      line:{color:"green"}
    }];
    var layout = [{
        title:'A Line Chart in Plotly',
  height: 550,
  font: {
    family: 'Lato',
    size: 16,
    color: 'rgb(100,150,200)'
  },
  plot_bgcolor: 'rgba(200,255,0,0.1)',
      margin:{t:30,l:25,r:10,b:30},
     yaxis:{range:[0,15]},
     width:400,
     height:300
      }];
    Plotly.newPlot("grafico",data, layout);
}