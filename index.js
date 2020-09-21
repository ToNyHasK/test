let button = document.getElementById("clickMe"),
    count = 0;
button.onclick = function() {
 count++;
 button.innerHTML = "Click me: " + count;
};