debugger

for (let i= 1; let =10; i++){
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
    
}
