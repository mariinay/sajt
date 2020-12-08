function fja_confirmDa(){
   
    confirm("Da li ste sigurni da želite da potvrdite?");
}
function fja_confirmNe(){
     confirm("Da li ste sigurni da želite da poništite?");
}

function validacijaForme() {
    if( document.getElementsByName('ime').value == "" ) {
        alert("Unesite ime i prezime ");
       
        return false;
     }
     if( document.getElementsByName('email').value == "" ) {
        alert("Unesite email");
       
        return false;
     }
     if( document.getElementsByName('comment').value == "" ) {
        alert("Unesite komentar");
        
        return false;
     }
     return true ;
    
}