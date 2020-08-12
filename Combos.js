

import Pizza from  './Pizza.js';
class Combos extends Pizza{
// Constructor de la clase Combos    
constructor(combo,cantidad,tamano,masa,ingredientes,bebida, postre){
    // COnstructor de la clase base ó Principal ó de la que hereda(extends)
super(tamano,masa,ingredientes);
this.combo = combo;
this.cantidad= cantidad;
this.bebida= bebida;
this.postre=postre;
}
// Método de esta clase contiene : a su ves otros métodos
elegirCombo(){
this.preparar();// Estos métodos son heredados de la clase Pizza
this.hornear();
this.empacar();
console.log(`Pedido : Combo ${this.combo}-${this.cantidad}
 Pizza ${this.cantidad}+ ${this.bebida}+ ${this.postre}`);
 return this;
}// fin de elegir Combo



}// fin de la clase

const Pedido =  new Combos("Personal",1,"Mediana","Tradicional",["Queso","Peperoni","Champiñones"],
"Coca-Cola","Rollitos de canela");
console.log(Pedido.elegirCombo());


export default Combos;
