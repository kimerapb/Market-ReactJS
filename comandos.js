//VERSION DE GIT
git --version

//git init --  para crear el contenido que necesita git para trabajar
git init

// git add. -- prepara los archivos para nuestro commit
git add .

// git reset --  revierte el git add
git reset . 

//git commit -m  -- es como crear una veersión o tomar una fotografia

git commit -m "primer commit"

// git checkout -- . -- restablece ultimo commit realizado
git checkout -- .

// parra arreglas el nombre del ultimo commit
git commit --amend

//CREAMOS UNA NUEVA RAMA EL NOMBRE VA SIN COMILLAS
git checkout -b "rama-v3"

// para escribir  -- i.     w = write q = salir ! = para realizarlo
// para salir tecla_escape + :wq! para que lo cambie

git remote add origin "NOMBRE DEL REPOSITORIO SIN COMILLAS"
git branch -M main
git push -u origin main

git remote -vv
git push -u origin