const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.use(express.json())

const appBackendURL = 'http://localhost:3001'

app.listen(port, () => {
  console.log(`Main App listening on http://localhost:${port}`)
})

// TAREA 1: Crear un endpoint para inscribir un usuario a un evento por su id.
// TAREA 2: Modificar el endpoint para que reciba el email del usuario y el nombre del evento.
//   TAREA 2.1: Obtener los datos del usuario por su email.
//   TAREA 2.2: Obtener los datos del evento por su nombre.
// TAREA 3: Validar que el usuario no esté inscrito más de 5 veces en el evento.
// TAREA 4: Validar que queden entradas disponibles para el evento.
// TAREA 5: Crear un endpoint para obtener los eventos a los que está inscrito un usuario.
// TAREA 6: Crear un endpoint para obtener todos los eventos (devolver un array con los nombres de los eventos).
