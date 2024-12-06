import { WP_Event } from "../utils/DataClasses.js"
import * as FakeData from "../utils/FakeData.js"

/*export function printHello() {
    let h = document.getElementById("home_hello_h")
    h.innerHTML = `hello username='${localStorage.getItem("username")}'`
}*/

var bodyEl = document.getElementById("app")
var ev = FakeData.getDailyEventExamples().concat(FakeData.getOneTimeEventExamples())
for (let e of ev) {
    bodyEl.appendChild(e.buildElement())
    bodyEl.innerHTML += "<br/>"
}

window.printHello = printHello;