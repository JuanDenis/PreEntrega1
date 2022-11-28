let usuario = prompt("Ingrese el nombre de Usuario: (EntregaCoder)");
const contraseniaAutorizada = 1234;

for (let i = 0; i < 2; i++);
    let contraseniaUsuario = parseInt(prompt("Ingrese su contraseña: (1234)"));
    if(contraseniaUsuario === contraseniaAutorizada) {
        reservaEntrada();
    } else {
        contraseniaUsuario = prompt("Contraseña incorrecta, vuelta a intentarlo");
    } 

function reservaEntrada() {
    if (usuario === "EntregaCoder") {
            alert("Bienvenido " + usuario + "!");

            let partido = prompt("Seleccione un partido al que desee asistir. \n1) Argentina vs México \n2) Uruguay vs Portugal \n3) Argentina vs Polonia \n4) Uruguay vs Ghana");

            switch(partido){
            case "1":
                alert('Seleccionaste: Argentina vs México \nSu reserva quedó realizada correctamente para el día 26/11');
                break;
            case "2":
                alert('Seleccionaste: Uruguay vs Portugal \nSu reserva quedó realizada correctamente para el día 28/11');
                break;
            case "3":
                alert('Seleccionaste: Argentina vs Polonia \nSu reserva quedó realizada correctamente para el día 31/11');
                break;
            case "4":
                alert('Seleccionaste: Uruguay vs Ghana \nSu reserva quedó realizada correctamente para el día 02/12');
                break;
            default:
                alert('El valor ingresado es incorrecto');
            }
    } else {
        alert("Verifique el nombre de Usuario e intente nuevamente");
    }
}




