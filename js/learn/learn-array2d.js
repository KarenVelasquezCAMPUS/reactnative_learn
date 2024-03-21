// Array bidimensionales

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

matrix[1][2] = 10; // ir a la fila 1 al elemento 2
console.log(matrix);

let value = matrix[0][1];
console.log(value);

for (let i=0;i<matrix.length;i++) {
    for (let j = 0; j < matrix[i].length; j++) { 
        console.log(matrix[i][j]);
    }
}

function findElement (matrix,element) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === element) {
                return true;
            }
        }
    }
    return false;
}

console.log(findElement(matrix,5));

function duplicateMatrix (matrix) {
    let newMatrix=[];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [...matrix[i]];
    }
    return newMatrix;
}

console.log(duplicateMatrix(matrix));