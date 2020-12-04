---
title: 👌¡Git tips!
date: 2020-12-06
published: true
tags: ['Git', 'Utils', 'CheatSheet']
series: false
canonical_url: false
description: "Algunos imprescindibles de git que tengo siempre a la mano para ocasiones 
              especiales en los que se complica alguna cosilla."
---

¡Hello Word! En este post me gustaría compartir algunos imprescindibles de git que tengo siempre a la mano para ocasiones 
especiales en los que se complica alguna cosilla. 

Sin más preámbulos... ¡empezamos!

### 🍃 Fetch some branch

Cuando trabajamos en algún proyecto muy grande en los que no nos interesa hacer un pull/fetch completo, 
podemos hacer un fetch a una rama concreta para luego movernos a ella. Para ello siempre uso:

- `git fetch origin <remote-branch>`

Si lo que queremos es descargarnos todas las ramas de nuestro proyecto, sin hacer un merge, podemos usar:

- `git fetch --all`

### 🍒 Cherry pick tools

¡Cuántas veces no te ha dado conflicto hacer un cherry-pick! Pues abortar misión es tan sencillo como: 

- `git cherry-pick --abort`

### 🧹Clean untracked files

No sé si a ti te pasa, pero muchas veces se me mete basurilla de untracked files en los proyectos que no me interesan, 
para ello tengo varios comanditos útiles:

- `git clean -n` → para ver estos untracked files
- `git clean -f` → para forzar  la eliminación de estos untracked files
- `git clean -f -d` → para borrar los directorios untracked

### 🗑 Deleting branches

Borrar algún branch en local es bastante sencillo... nos movemos de rama y borramos.

⚡️Borrar Local branch

- `git checkout <master-branch>`
- `git branch -d <old-branch-to-delete>`

Sin embargo, uno de los mejores comandos que tengo en esta guía, y que suelo usar bastante, es el de borrar desde
 mi consola un branch remoto. ¡Este comando es súper útil cuando tenemos restricciones en la interfaz visual del 
 repo para eliminar algún branch! 

⚡️Borrar Remote branch

- `git push origin --delete <old-branch-to-delete>`

⚠️¡Warning! Un gran poder conlleva una gran responsabilidad 🙅🙆🙅🙆

### 🧼Remove everything locally

Muchas veces, hacemos cambios y commits en local que queremos eliminar. Para borrar todos mis cambios en local y 
estar igual que la rama en master lo que suelo hacer es:

- `git reset --hard HEAD`

Otra opción con el mismo objetivo puede ser:

- `git reset --hard origin/master`

realmente con esto lo que estamos haciendo es forzar un pull a nuestro repo en local.

¡Esto ha sido todo! Espero que estos pequeños tips de git les sean tan útiles como lo son para mí. 
Si conocen alguno más, que merezca la pena añadir a este post, no duden escribirme [@AleSt4r](https://twitter.com/AleSt4r). 

----------------------------------------------------------------------------------------------

#### 👇👇👇👇 El resumen de este post 👇👇👇👇

#### 🍃 Fetch some branch

- `git fetch origin <remote-branch>`

#### ⏬Force pull

- `git fetch --all` → to download without merge

#### 🍒 Cherry pick tools

- `git cherry-pick --abort` → to abort a cherry-pick

#### 🧹Clean untracked files

- `git clean -n` → to show untracked files
- `git clean -f` → force to delete untracked files
- `git clean -f -d` → delete directories

#### 🗑 Deleting branches

⚡️Local branch
- `git checkout <master-branch>`
- `git branch -d <old-branch-to-delete>`

⚡️Remote branch
- `git push origin --delete <old-branch-to-delete>`

#### 🧼Remove everything locally

- `git reset --hard HEAD` → to have the same that in remote
- `git reset --hard origin/master`

