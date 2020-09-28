/*
2: callbackCopy.js

Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
en utilisant les api asynchrones basées sur des callbacks du module fs de node.js.
*/

import fs from 'fs'

console.log('START OF PROGRAM')

fs.copyFile('.././file2.txt', '.././file3.txt', (err, data) => {
    if (err) console.error(err)
    else console.log('file3.txt: ', data)
})

console.log('END OF PROGRAM')
