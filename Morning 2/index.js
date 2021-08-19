document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 
'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 
'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
}

window.onload = function() {
    if(!window.location.hash) {
       window.location = window.location + '#loaded';
       window.location.reload()
    }
  }
  
  window.onload = function(){
        alert("HEY, I AM TANMAY, CLICK ANYWHERE")
  }




  