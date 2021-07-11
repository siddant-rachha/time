const blink = () => {
    let color = document.getElementById('todaysdate').style.color
    if (color != "red") {
        document.getElementById('todaysdate').style.color = "red";
        document.getElementById('remainingtime').style.color = "red";
    }
    else {
        document.getElementById('todaysdate').style.color = "black";
        document.getElementById('remainingtime').style.color = "black";
    }
}