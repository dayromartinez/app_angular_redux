import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, reset, multiplicar, dividir } from './contador.actions';

export const estadoInicial = 0;

//Forma antigua de crear un reducer
// export const contadorReducer = (estado: number = 11, accion: Action) => {

//   switch(accion.type) {

//     case incrementar.type:
//       return estado + 1;

//     case decrementar.type:
//       return estado - 1;

//     default:
//       return estado
//   }
// }


//Forma moderna de hacerlo (PDTA: De esta forma se optimiza más la velocidad de respuesta y los cambios en los estados)
//El método on hace una función homónima a un case dentro de un switch. Es un switch optimizado
//Cuando una variable o función o método lleva un '_' antes de su nombre, esta nomenclatura hace mención a que es un elemento PRIVADO.
const _contadorReducer = createReducer(
  estadoInicial,
  on(incrementar, (estado) => estado + 1),
  on(decrementar, (estado) => estado - 1),
  //Por defecto en este caso, como segundo parámetro del método recibe las props definidas en la acción, por lo que es posible hacer destructuring para simplificar el código
  on(multiplicar, (estado, { numero }) => estado * numero),
  on(dividir, (estado, { numero }) => estado / numero),
  on(reset, (estado) => 0)
);

export const contadorReducer = (estado: number = 11, accion: Action) => {
  return _contadorReducer(estado, accion)
}


