//VERSION DE GIT ESTO ESTA EN LA RAMA V3
git --version

//git init --  para crear el contenido que necesita git para trabajar
git init

// git add. -- prepara los archivos para nuestro commit
git add .

// git reset --  revierte el git add
git reset . 

//git commit -m  -- es como crear una veersión o tomar una fotografia

git commit -m "primer commit"

// git checkout -- . -- restablece ultimo commit realizado recostruye
git checkout -- .

// parra arreglas el nombre del ultimo commit
git commit --amend

//sirve para ver todas las ramas
git branch


//CREAMOS UNA NUEVA RAMA EL NOMBRE VA SIN COMILLAS
git checkout -b "rama-v3"

// para cambiarse de rama  "rama" es la rama a donde voy a ir
git checkout rama

//unir ramas por ejemplo estoy en la rama-v2 y le uno la rama-v3

git merge rama-v3

//borrar la rama "rama-v3" es el nombre de la rama que voy a borrar.
git branch -d rama-v3 


//git pull
git pull

//git push sirve para subir a gitub
git push

//sirve para subir la rama a github
git push --set-upstream origin v3

// para escribir  -- i.     w = write q = salir ! = para realizarlo
// para salir tecla_escape + :wq! para que lo cambie

git remote add origin "NOMBRE DEL REPOSITORIO SIN COMILLAS"
git branch -M main
git push -u origin main

git remote -vv
git push -u origin