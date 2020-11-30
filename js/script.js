function prikazi_confirm() {
    var r = confirm("Da li ste sigurni")
    if (r == true) {
        document.write("Pritisnuli ste OK!")
    } else {
        document.write("Pritisnuli ste Cancel!")
    }
}
document.getElementById('dugmeSubmit').addEventListener('click', prikazi_confirm);
