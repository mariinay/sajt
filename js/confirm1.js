function fja_confirmNe(){
    confirm("Da li ste sigurni da želite da poništite?");
}


function validacijaForme1(){
    var ime=document.getElementById('name').value;
    var email=document.getElementById('email').value
    var des=document.getElementById('destination').value
    var pol=document.getElementById('polazak').value
    var pov=document.getElementById('povratak').value
    
    var ln=document.getElementById('lastname').value
    var phone=document.getElementById('phone').value
    var od=document.getElementById('odrasli-id').value
    var de=document.getElementById('deca-id').value
    

 
     if(ime==""){
    alert('Unesite ime ');
    return false;
    }else if(email==""){
   
       alert("Unesite email");
 
       return false;
    }else if (des == "") {
       alert("Unesite destinaciju");
 
       return false;
    }else if (pol == "") {
        alert("Unesite polazak");
  
        return false;
     }else if (pov == "") {
        alert("Unesite povratak");
  
        return false;
     }

    else if (ln == "") {
        alert("Unesite prezime");
  
        return false;
     }else if (phone == "") {
        alert("Unesite telefon");
  
        return false;
     }else if (od == "") {
        alert("Unesite broj odraslih");
  
        return false;
     }else if (de == "") {
        alert("Unesite broj dece");
  
        return false;
     }
    else {
       confirm("Da li ste sigurni da želite da potvrdite?");
       return true;
    }
 }
 