import { WP_Event } from "../utils/DataClasses.js"
import * as FakeData from "../utils/FakeData.js"

/*export function printHello() {
    let h = document.getElementById("home_hello_h")
    h.innerHTML = `hello username='${localStorage.getItem("username")}'`
}*/

function loadData(){
    var bodyEl = document.getElementById("app")
    var ev = FakeData.getDailyEventExamples().concat(FakeData.getOneTimeEventExamples())
    bodyEl.innerHTML += ev[0].buildHeadersHTML();
    for (let e of ev) {
        bodyEl.appendChild(e.buildElement())
        bodyEl.innerHTML += "<br/>"
    }
}

window.loadData = loadData;