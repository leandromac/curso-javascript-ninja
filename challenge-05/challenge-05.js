/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [ 'Leandro', 33, true, 'Ensino Superior', 0];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(myArray) {
    return myArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(myArray)[0]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunc2( arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [ 'Olá', 10, false, [1,2,3], '20' ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunc2(myArray2,2)); // false

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
    var books = {
      'Segredos do Javascript': {
        quantidadedePaginas: '300',
        autor: 'Leandro Macedo',
        editora: 'Bookler'
      },
      'Segredos do Angular': {
        quantidadedePaginas: '327',
        autor: 'Fábio Macêdo',
        editora: 'Novatec'
      },
      'Segredos do Python': {
        quantidadedePaginas: '264',
        autor: 'Leandro Macedo',
        editora: 'Novatec'
      },
    };
    return !bookName ? books : books[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Segredos do Javascript';
console.log('O livo: ' +  bookName + ', do autor ' + book(bookName).autor + ' tem ' + book(bookName).quantidadedePaginas +  ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livo ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');