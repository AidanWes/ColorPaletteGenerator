let colors = document.getElementsByClassName('color');
let values = document.getElementsByClassName('value');

document.getElementById('generator').addEventListener("click", ()=> {
    for (let i = 0; i < colors.length; i++) {
        let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colors[i].style.backgroundColor = color;
        values[i].innerHTML = color;
    }
})

function color(index) {
    let popup = document.getElementById('popup');
    let copy = document.createElement('textarea');
    copy.value = values[index].innerHTML;
    popup.innerHTML = "<strong>" + values[index].innerHTML + "</strong>" + " has been copied.";
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
    
    setTimeout(()=>{
        popup.style.visibility = "visible";
    }, 0);
    
    setTimeout(()=>{
        popup.style.visibility = "hidden";
    }, 1500);
}