
function uhrzeit () {
const jetz = new Date();
 h = jetz.getHours();
 m = jetz.getMinutes();
 s = jetz.getSeconds();
 ms = jetz.getMilliseconds();
 ms = Number(String(ms).slice(0,2));
const display = document.getElementById("display"); 
display.textContent =   h + ':' + m + ':' + s + ":" + ms;
setTimeout(uhrzeit,500);
}
uhrzeit();
