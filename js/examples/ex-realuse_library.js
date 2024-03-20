// Ejemplo de uso de arrow function y duplicacion de codigo (Funciones constructoras)

function Libro (titulo, autor, copias)   {
    this.titulo = titulo;
    this.autor = autor;
    this.copias = copias;

    this.mostrarInfo = function() {
        console.log(`${this.titulo} por ${this.autor} hay ${this.copias} copia`); 
    };

    this.prestarLibro = function() {
        if(this.copias > 0) {
            this.copias -= 1;
            console.log(`Libro prestado: ${this.titulo}. Copias restantes: ${this.copias}.`);
        } else {
            console.log(`Lo sentimos, no hay copias disponibles para prestar de ${this.titulo}.`);
        }
    };

    this.devolverLibro =  function () {
        this.copias += 1;
        console.log(`Libro devuelto: ${this.titulo}. Copias actualizadas: ${this.copias}.`);
    };
}

// Crear instancias de Libros

// Información de los Libros
let libro1 = new Libro("El Hobbit", "J.R.R. Tolkien", 3);
let libro2 = new Libro("1984", "George Orwell", 5);

libro1. mostrarInfo();
libro2. mostrarInfo();

// Prestar libros
libro1.prestarLibro();
libro1.prestarLibro();
libro1.devolverLibro();