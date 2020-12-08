function fja_confirmDa(){
   
    confirm("Da li ste sigurni da želite da potvrdite?");
}
function fja_confirmNe(){
     confirm("Da li ste sigurni da želite da poništite?");
}

function validacijaForme() {
    if( document.formularKontakt.ime.value == "" ) {
        alert("Unesite ime i prezime ");
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.formularKontakt.email.value == "" ) {
        alert("Unesite email");
        document.myForm.Name.focus() ;
        return false;
     }
     if( document.formularKontakt.comment.value == "" ) {
        alert("Unesite komentar");
        document.myForm.Name.focus() ;
        return false;
     }
     return true ;
    
}