var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
var bg = document.getElementsByClassName('area');
var btn = document.getElementById('heading');
var tt = document.getElementById('txt');
var add = document.getElementById('add');
var x = 120;
btn.onclick = changeTheme;
add.onclick = () => {
    var area = document.getElementsByClassName('area');
    x += 100;
    area[0].style.height = `${x}vh`;
}
function changeTheme() {
    if (tt.innerHTML == "Dark Theme") {
        tt.innerHTML = "Light Theme";
        moon.style.display = 'none';
        sun.style.display = 'block';
        bg[0].style.background = "#000";
        tt.style.color = "#000";
        btn.style.background = "#fff";
        add.style.background = "#fff";
        add.style.color = "#000";
    }
    else {
        tt.innerHTML = "Dark Theme";
        sun.style.display = 'none';
        moon.style.display = 'block';
        bg[0].style.background = "#fff";
        tt.style.color = "#fff";
        btn.style.background = "#000";
        add.style.background = "#000";
        add.style.color = "#fff";
    }
}