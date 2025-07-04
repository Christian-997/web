// clase Persona
class Persona {
    //atributos: nombre, edad, telefono
    constructor(nombre, edad, telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.estado = "disponible";
    }
    mostrarDatos(){
        return "Nombre: " + this.nombre + "<br/> Edad: "+ this.edad + "<br/> Telefono: "+this.telefono +"<br/>";
    }
    cargarTelefono(telefono){
        if (telefono != ""){
        this.telefono = telefono;
        }else{
            this.telefono = "vacio";
        }
    }

}
pagina = document.getElementById("container");

const p1 = new Persona("Moises",36);
p1.cargarTelefono("098245748");
pagina.innerHTML = p1.mostrarDatos();
class Alumno extends Persona{
    constructor(nombre, edad, telefono, matricula, fecha){
        super(nombre, edad, telefono)
        this.matricula = matricula;
        this.fecha = fecha;
    }
    mostrarDatos(){
        return super.mostrarDatos()+ " Matricula: "+this.matricula+ "<br/> Fecha: "+this.fecha;
    }
}
alu1 = new Alumno("Christian", 28, "0982458214" , 28441, "18/02/1999");
pagina.innerHTML += alu1.mostrarDatos();
