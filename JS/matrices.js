document.getElementById("show").onclick = showit();
function showMatrix(rows, column) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            $("#matrix").append("<div class='grid'></div>");
            $(".grid").width(960 / rows);
            $(".grid").height(960 / column);
        };
    };
}
function showit() {
    var rows = document.getElementById("rows").value;
    var column = document.getElementById("column").value;
    console.log(rows);
    console.log(column);
    if (rows == "" || column == "") {
        alert("Please enter the number of rows and columns");
    } else {
        if (rows < 0 || column < 0) {
            alert("Please enter the number of rows and columns greater than 0");
        } else {
            showMatrix(rows, column);
        }
    }
}