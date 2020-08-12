
import {pi} from './Constantes.js';
import Prueba from './Prueba.js';
 export default class Pizza extends Prueba {
constructor(masa,tamano,ingredientes){
super("prueba")    
this.masa=masa;
this.tamano=tamano;
this.ingredientes= ingredientes;
this.prueba = this.prueba;
}//

preparar(){
console.log(`Preparando Pizza ${this.tamano},${this.masa},${this.ingredientes}`);
return this;
} // fin método

hornear(){
console.log('La pizza se está horneando');
return this;
 }// fin método

 empacar(){
     console.log('Empacando pizza...!');
     console.log('Pizza Lista para ser enviada...!');
     console.log(pi);
     return this;
 }


}// fin de la clase Pizza
// Crear los Obje

const pedidoPollo = new Pizza("Maza delgada","Grande",["Queso","pollo","Champiños"]);
console.log(pedidoPollo.preparar());
console.log(pedidoPollo.hornear());
console.log(pedidoPollo.empacar());



