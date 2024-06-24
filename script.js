var doughnutqwertyuiop = 10;
//localStorage.clear()
setInterval(easyTimer, 1000)
function easyTimer() {
  if (doughnutqwertyuiop == 0) {
        const boxes = document.querySelectorAll('h1#h11');
     //console.log(boxes.length); // 👉️ []
    if (boxes.length!=0) return
    stop()
  } else {
    doughnutqwertyuiop--
    document.getElementById("deone").innerHTML = doughnutqwertyuiop
  }
}
let a = Math.floor(Math.random() * 9)
const h = document.getElementById(a)
h.style.background = "red"

var aa = 0
function phoneUnlock(id) {
  let click = document.getElementById(`${id}`)
  if (click.style.background == "red") {
    aa++
    document.getElementById("h").innerHTML = aa
    click.style.background = "white"
    let a = Math.floor(Math.random() * 9)
    const h = document.getElementById(a)
    h.style.background = "red"
  } else {
    stop()
  }
}



function stop() {
  $("div").remove(".container");
  let s = aa
  let h = localStorage.getItem("high-score")
  let g = localStorage.getItem("attempts")
  let total = localStorage.getItem("total")
  total==null ? total=0 : total=total
  total = (2*total) - total + s
  g==null ? g=0 : g=g
  g++
  if (h == null || h<=s) h = s
  $("#containe").html(`<h3 id="h31">Score<br>${s} </h3> <h1 id="h11">High Score<br>${h} </h1><br><h2>Attempts<br>${g}</h2><br><button id="dash">My Dashboard</button>`);
  s>=h ? localStorage.setItem("high-score", s) : localStorage.setItem("high-score", h)
  localStorage.setItem("attempts", g)
  localStorage.setItem("total", total)
  localStorage.setItem(`${g}-attempt`, s)
  const el = document.createElement('button')
  el.setAttribute("id", "box");
  el.addEventListener('click', function () {
  location.reload()
});
  el.textContent = 'Play again'
 for (i=0; i<1; i++) {
    document.body.appendChild(el);
  };
  document.getElementById("dash").addEventListener('click', function () {
  location.href = "dash.html";
});
}
