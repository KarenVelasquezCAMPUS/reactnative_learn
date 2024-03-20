// Ejemplo de uso de arrow function y duplicacion de codigo (Funciones constructoras)

class PS4Game {
    constructor(title, genre, realeseYear, rating) {
        this.title = title;
        this.genre = genre;
        this.realeseYear = realeseYear;
        this.rating = rating;
        this.isReleased = false;
    }

    release() {
        console.log(`${this.title} has been released in ${this.realeseYear}.`);
        this.isReleased = true;
    }

    getDetails () {
        return `${this.title} (${this.realeseYear}) - Genre: ${this.genre}, Rating: ${this.rating
        }`;
    }
}

// Generacion de juegos de PS4
const theLastOfUs2 = new PS4Game('The Last Of Us Part II', 'Action.Adventure', 2020, 'Mature');
const ghostOfTsushima =  new PS4Game("Ghost of Tsushima", "Action.Adventure",  2020, "Mature" );

// Imprimir detalles y estado del juego
const printGameDetails = (game) => {
    console.log(game.getDetails());
    if (!game.isReleased) {
        console.log(`${game.title} has not been released yet.`);
    }
};

printGameDetails(theLastOfUs2);
printGameDetails(ghostOfTsushima);

// Lanzar los juegos
theLastOfUs2.release();
ghostOfTsushima.release();

// Imprimir detalles y estado del juegos actualizado
printGameDetails(theLastOfUs2);
printGameDetails(ghostOfTsushima);