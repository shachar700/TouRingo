import * as FakeData from "../utils/FakeData.js"

export function printHello(){
    let h = document.getElementById("home_hello_h")
    h.innerHTML = `hello username='${localStorage.getItem("username")}'`
}

var bodyEl = document.getElementById("homeID")
var ev = FakeData.getDailyEventExamples().concat(FakeData.getOneTimeEventExamples())
for (let e of ev){
    bodyEl.appendChild(e.buildElement())
    bodyEl.innerHTML += "<br/>"
}

window.printHello = printHello;