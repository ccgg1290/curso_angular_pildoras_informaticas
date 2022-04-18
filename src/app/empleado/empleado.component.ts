import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="cristian ";
  apellido="gualtero";
  // es poisble acceder a estas variables desde otra clase, 
  // pero tabn podemos encapsula rlos datos y acceder a estos a traves de metodos getter setter
  private edad=5;
  //empresa="Movii";

  habilitacionCuadro=false;

  usuRegistrado=true;

  textoDeregistro="No hay nadie registrado"
  
  getRegistrousuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(){
   // alert ("El usuario se acaba de registrar");
   this.textoDeregistro="El usuario se acaba de registrar"
  }


 getEdad(){
  // metodo getter
  return this.edad;
 }

  //llamaEmpresa(value:string){} esta funcion la usamos en video 8 eevento con boton

  constructor() { }

  ngOnInit(): void {
  }




}
