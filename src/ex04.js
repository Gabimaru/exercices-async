/*
4: Optionnel:

Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:

    un fichier source, qui est le fichier à copier
    un fichier dest, qui sera la destination de la copie

Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js.

*/

import fs from 'fs/promises'

const readFile1 = async () => {
    let content = await fs.writeFile(
        './../message1.txt',
        'Hello Node.js',
        'utf-8'
    )
    return content
}

const readFile2 = async () => {
    let content = await fs.copyFile('./../message1.txt', './../message2.txt')
    return content
}

console.log('START OF PROGRAM')
let content1 = await readFile1()
console.log(content1)
let content2 = await readFile2()
console.log(content2)
console.log('END OF PROGRAM')
