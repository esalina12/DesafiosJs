//----------------------------------- Desafío 1 -----------------------------------------


/* for (let i= 1; let =10; i++){
    if (i >=5){
        alert('Ya no disponemos turnos')
        break
    }
alert('¡Bienvenido/a! Complete los datos para solicitar turno y el monto a pagar por la atención')

let nombre= prompt('Ingrese su nombre y apellido:')
let dni= prompt('Ingre su número de documento:')

console.log('Ingrese el número correspondiente a la especialidad:')
let arancel = 0
let esp = parseInt(prompt('1 = Oftalmología / 2 = Laboratorio / 3 = Ginecología / 4 = Dermatología'))
        if ((esp === 1) || (esp === 2) || (esp === 3) || (esp === 4) ){
                    switch (esp){
                        case 1:
                            arancel = 1000
                            break
                        case 2:
                            arancel = 800
                            break
                        case 3:
                            arancel = 2000
                            break
                        case 4:
                            arancel = 1800
                            break
                        default:
                            alert ('Debe escribir un número del 1 al 4, correspondiente a la especialidad que desea.')
                            break
                    }
                    const CONSULTA = 1000
                    const costo = (CONSULTA, arancel) => CONSULTA + arancel
                    const ATENCION = 20
                    const espera = (ATENCION * (i - 1))
                    
                    alert(nombre+' '+dni+' su turno es el: '+i+' y su costo es: '+ costo(CONSULTA, arancel)+'.'+' El tiempo de espera es: '+espera+' minutos aproximadamente.')
        } else {
            alert('Debe elegir una de la lista')
            break
        }
} */
//-------------------------------------------- Fin desafío 1 -------------------------------------------------------------


//-------------------------------------------------- DESAFIO 3 ------------------------------------------------------------


const especialistas = [{
        sede: 'CABA',
        nombre: 'Mario Bross',
        espe: 'OFTALMOLOGIA'
    },
    {
        sede: 'Zona Oeste',
        nombre: 'Esteban Quito',
        espe: 'MEDICO CLINICO'
    },
    {
        sede: 'Zona Norte',
        nombre: 'Adriana Gonzales',
        espe: 'GINECOLOGIA'
    },
    {
        sede: 'Zona Sur',
        nombre: 'Armando Paredes',
        espe: 'NUTRICION'
    }
]
const tabla = document.getElementById('tabla')

function cargarEspecialistas(array) {
    let fila = ''
    tabla.innerHTML = ''
    array.forEach(lista => {
        fila = `<tr>
                        <td>${lista.sede}</td>
                        <td>${lista.nombre}</td>
                        <td>${lista.espe}</td>
                    </tr>`
        tabla.innerHTML += fila
    });
}

cargarEspecialistas(especialistas)

const consulta = 1000
let precio = 0

class Paciente {
    constructor(nombre, apellido, dni, condicion) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.dni = parseInt(dni)
        this.condicion = condicion.toUpperCase()
    }

    costo() {
        if (this.condicion === 'PARTICULAR') {
            precio = 2000 + consulta
        } else if (this.condicion === 'OSDE') {
            precio = 1000 + consulta
        } else {
            alert('Particular u osde')
        }
    }
}


function presupuestoPaciente() {
    let nombre = (prompt('Ingrese su nombre:')).toUpperCase()
    let apellido = (prompt('Ingrese su apellido:')).toUpperCase()
    let dni = parseInt(prompt('Ingrese su dni:'))
    let condicion = (prompt('Ingrese si es particular o afiliado OSDE:')).toUpperCase()
    let especial = (prompt('Elija una especialidad: Oftalmología, Medico clinico, Ginecología o Nutrición')).toUpperCase()


    let datosPaciente = document.createElement('div')

    datosPaciente.innerHTML = ` <h3>Su turno:</h3>
                                <p> Nombre: ${nombre}</p>
                                <p> Apellido: ${apellido}</p>
                                <p> DNI: ${dni}</p>
                                <p> Condicion: ${condicion}</p>
                                <p> Especialidad: ${especial}</p>`

    document.body.appendChild(datosPaciente)
}

let boton = document.getElementById('btn')
boton.onclick = () => presupuestoPaciente()

//----------------------------------FIN DESAFIO 3 -------------------------------------------------