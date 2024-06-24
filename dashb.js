var xValues = [1,2,3,4,5];
var y = []
var ymin = []
var yValues = [];
const cc = localStorage.getItem("attempts")
for (i=cc-4;i<=cc;i++){
  let b = localStorage.getItem(`${i}-attempt`)
  y.push(2*b-b)
  ymin.push(2*b-b)
  yValues.push(2*b-b)
}
let min = ymin.sort(function(a, b){return a - b})[0]
let max = yValues.sort(function(a, b){return b-a})[0]

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: y
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: min, max:max}}],
    }
  }
});

const a = localStorage.getItem("attempts")
let no = 0
if(a<=5) {
  void(0)
}
else {
  for(i=a-4; i<=a; i++) {
    let a = localStorage[`${i}-attempt`]
    no = no + (2*a) - a
  }
  $("#last-game").html(`Average score of last 5 games: ${Math.round(no/a)}`);
} 
$("#attempts").append(localStorage.getItem("attempts"));
$("#high-score").append(localStorage.getItem("high-score"));
$("#average-score").append(Math.round(localStorage.getItem("total")/localStorage.getItem("attempts")));
