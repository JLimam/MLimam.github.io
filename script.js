function validarForm() {
    //var nom = document.forms["formulari"]["nomComplet"].value;
    var nom = document.getElementById("nomComplet").value;
    var num = document.getElementById("numerosNIF").value;
    var lletra = document.getElementById("lletraNIF").value;

    alert("Comencem a validar..." + nom + " " + num + " " + lletra);
    lletra = lletra.toUpperCase();
    num = num % 23;
    lletres_dni = "TRWAGMYFPDXBNJZSQVHLCKET";
    lletra_apartir_num = lletres_dni.substring(num, num + 1);
    if (lletra != lletra_apartir_num) {
        alert("DNI erroni, la lletra del DNI no es correcte");
        return false;
    } else {
        alert("Tot correcte, envie'm les teves dades. Gràcies. " + nom);
        document.getElementById("formulari").submit();
        return true;
    }
}