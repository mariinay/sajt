function fja_confirmDa(){
   
    confirm("Da li ste sigurni da želite da potvrdite?");
}
function fja_confirmNe(){
     confirm("Da li ste sigurni da želite da poništite?");
}

function validacijaForme() {
   if (document.getElementsByClassName('ime').value == "") {
      alert("Unesite ime i prezime ");

      return false;
   }else if (document.getElementsByName('email').value == "") {
      alert("Unesite email");

      return false;
   }else if (document.getElementsByName('comment').value == "") {
      alert("Unesite komentar");

      return false;
   }else return true;

}
