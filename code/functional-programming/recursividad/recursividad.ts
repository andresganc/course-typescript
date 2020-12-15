
// ============ RECURSIVIDAD ===============
/*
La recursividad es una funcion que se llama a si misma una y otra vez hasta que
se cumple una condicion de salida.
*/

// Ejemplo 1:
// Funcion que recibe un parametro a y verifica en la condicion si a es < 0
// Imprime y se llama asi misma restandole -1

const conteoRegresivoTS = (a: any) => {
    if (a < 0) return 
        console.log(a)
        return conteoRegresivoTS(a - 1)
}

conteoRegresivoTS(10)



// Ejemplo 2:
/* Funcion que llama a una API con axios
    - Se va a usar la recursividad para hacer varios llamados adicionales en caso 
        de que este no responda en los primero intentos.
    - Se van a usar 6 intentos de llamados. Si despues de estos 6 llamados no respone
        se enviara un mensaje de error
*/  
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//const axios = require('axios')    // Recomendado: No usar require 
//import { axios } from 'https://unpkg.com/axios/dist/axios.min.js'
import axios from 'axios'

const llamarAPI = async (url: string, llamados: number = 0) => {
    
    try {

        const result = await axios.get(url)
        
        console.log(result)
        return result    

    } catch (error) {

        if (llamados > 5) {
           return ''
        } 
        console.log(error)
        return llamarAPI(url, llamados + 1)

    }
}

llamarAPI('https://jsonplaceholder.typicode.com/users')