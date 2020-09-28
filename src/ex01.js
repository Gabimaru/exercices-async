/*
1: syncCopy.js

Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt en utilisant les api synchrones du module fs de node.js
*/
//fs.copyFile(src, dest[, mode], callback)
import fs from 'fs'

console.log('start of program')

fs.copyFileSync('.././file1.txt', './../file2.txt')

console.log('end of program')
