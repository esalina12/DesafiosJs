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


/* const especialistas = [{
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
boton.onclick = () => presupuestoPaciente() */

//----------------------------------FIN DESAFIO 3 -------------------------------------------------

//----------------------------------- DESAFIO 4 ---------------------------------------------------

const nombre = document.querySelector('#nombre')
const dni = document.querySelector('#dni')
const condicion = document.querySelector('#condicion')
const especialidad = document.querySelector('#especialidad')
const datosPaciente = document.querySelector('#datosPaciente')

//----------------------------------- LISTA OBRA SOCIAL ----------------------

const obraSocial = [{
   opcion: 'Particular'},
   {opcion: 'OSDE'} ,
   {opcion: 'OSECAC'} ,
   {opcion: 'UPCN'} ,
   {opcion: 'SUTEBA'} ,
]

const cargaCondicion = (select, array) => {
    
    array.length > 0 && array.forEach (elemento => {select.innerHTML += `<option>${elemento.opcion}</option>`})
}


cargaCondicion(condicion, obraSocial)

//---------------------- FIN LSITA OBRA SOCIAL---------------------------------------

// -------------------------Lista especialistas----------------------------------------

const especialistas = [{
    sede: 'CABA',
    nombre: 'Mario Bross',
    especializacion: 'OFTALMOLOGIA'
},
{
    sede: 'Zona Oeste',
    nombre: 'Esteban Quito',
    especializacion: 'MEDICO CLINICO'
},
{
    sede: 'Zona Norte',
    nombre: 'Adriana Gonzales',
    especializacion: 'GINECOLOGIA'
},
{
    sede: 'Zona Sur',
    nombre: 'Armando Paredes',
    especializacion: 'NUTRICION'
}
]

const cargaEspecialidad = (select, array) => {
    
    array.length > 0 && array.forEach (elemento => {select.innerHTML += `<option>${elemento.especializacion}</option>`})
}
cargaEspecialidad(especialidad, especialistas)


// ---------------------------------Fin lista especialistas-------------------------



//-----------------------SACAR TURNO---------------------------------

const turnos = []

const sacarTurno = () => {  

     datosPaciente.innerHTML = `<h3>SU TURNO:</h3>
                                <p> Nombre: ${nombre.value}</p>
                                <p> DNI: ${dni.value}</p>
                                <p> Condicion: ${condicion.value}</p>
                                <p> Especialidad: ${especialidad.value}</p>`

    document.body.appendChild(datosPaciente)
}

let boton = document.querySelector('#btn')
boton.addEventListener('click', sacarTurno)

function datosTurno () {
    localStorage.setItem('nombre', nombre.value)
    localStorage.setItem('dni', dni.value)
    localStorage.setItem('condicion', condicion.value)
    localStorage.setItem('especialidad', especialidad.value)
}
boton.addEventListener('click', datosTurno)

//--------------------- FIN SACAR TURNO ----------------------------

//------- RECUPERAR DATOS--------------------------

let recuperar = document.querySelector('#recuperar')



function recuperarTurno(){
    let nombre = localStorage.getItem('nombre')
    let dni = localStorage.getItem('dni')
    let condicion = localStorage.getItem('condicion')
    let especialidad = localStorage.getItem('especialidad')

    datosPaciente.innerHTML = `<h3>SU TURNO:</h3>
                                <p> Nombre: ${nombre}</p>
                                <p> DNI: ${dni}</p>
                                <p> Condicion: ${condicion}</p>
                                <p> Especialidad: ${especialidad}</p>`

    document.body.appendChild(datosPaciente)
}
recuperar.addEventListener('click', recuperarTurno)
//------------------ FIN RECUPERAR DATOS---------------------------

//---------------- ENVIAR DATOS POR EMAIL---------------------
let botonEnviar = document.querySelector('#btnEnviar')

const enviarPorEmail = ()=> {
    const suTurno = {
        fecha: new Date().toLocaleString(),
        Nombre: nombre.value,
        DNI: dni.value,
        Especialidad: especialidad.value,
    }
    localStorage.setItem("suTurno", JSON.stringify(suTurno))
    
    Swal.fire({// ------------------ ALERT 
        title: '¡Enviado!',
        text: 'Los datos de su turno fueron enviados exitosamente',
        icon: 'success',
        confirmButtonText: 'Entendido'
      })
}

botonEnviar.addEventListener("click", enviarPorEmail)
//--------------------- FIN EVIAR DATOS ----------------------------
//---------------------------------- FIN DESAFIO 4 -------------------------------------------------