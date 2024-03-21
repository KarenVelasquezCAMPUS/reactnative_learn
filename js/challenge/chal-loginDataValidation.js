// Login on a Database Validation

const usersDatabase = [
    {
        username: "andrew",
        password: "123"
    },
    {
        username: "edward",
        password: "221"
    },
    {
        username: "mariana",
        password: "789"
    }
];

const usersTimeline = [
    {
        username: "andrew",
        timeline: "Me encanta JavaScript"
    },
    {
        username: "edward",
        timeline: "Me encanta CSS"
    },
    {
        username: "mariana",
        timeline: "Me encanta React"
    },
    {
        username: "oscar",
        timeline: "Yo hoy no quiero trabajar"
    }
];

const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu contraseña?");

function usuarioExistente (username, password) {
/*     for (let i = 0; i < usersDatabase.length; i++) { // tiene un error de que arroja mas de una respuesta si se busca apartir del segundo usuario
        if (
            usersDatabase[i].username === username && usersDatabase[i].password === password
        ) {
            console.log("Es correcto");
            break;
        } else {
            console.log("Es incorrecto");
        }
    } */

    let usuarioEncontrado = false; 

    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        return true;
    } else {
        return false;
    }
}

function singIn(username, password) {
    if (usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

singIn(username, password);