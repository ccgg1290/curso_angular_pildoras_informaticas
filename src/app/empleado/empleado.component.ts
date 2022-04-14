import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
<<<<<<< HEAD
  nombre="cristian ";
  apellido="gualtero";
  // es poisble acceder a estas variables desde otra clase, 
  // pero tabn podemos encapsula rlos datos y acceder a estos a traves de metodos getter setter
  private edad=5;
  empresa="Movii";

  
 getEdad(){
  // metodo getter
  return this.edad;
 }

=======
>>>>>>> f470f0865062e9c595fee8453d89d7f47dd55fc9

  constructor() { }

  ngOnInit(): void {
  }

}
