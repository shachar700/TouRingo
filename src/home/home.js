
export function printHello(){
    let h = document.getElementById("home_hello_h")
    h.innerHTML = `hello username='${localStorage.getItem("username")}'`
}

window.printHello = printHello;