function book(){
    document.getElementById("book").className = "book book1";
    document.getElementById("close").style.display = "block";
}
function book1(){
    document.getElementById("book").className = "book";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
}