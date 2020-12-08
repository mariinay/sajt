
function fja_confirmNe(){
     confirm("Da li ste sigurni da želite da poništite?");
}


function validacijaForme(){
   var ime=document.getElementById('ime').value;
   var email=document.getElementById('email').value
   var comment=document.getElementById('comment').value

    if(ime==""){
   alert('Unesite ime i prezime');
   return false;
   }else if(email==""){
  
      alert("Unesite email");

      return false;
   }else if (comment == "") {
      alert("Unesite komentar");

      return false;
   }else {
      confirm("Da li ste sigurni da želite da potvrdite?");
      return true;
   }
}
