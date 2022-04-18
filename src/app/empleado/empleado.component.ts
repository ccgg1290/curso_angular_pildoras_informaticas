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
  empresa="Movii";
  //cambiaEmpresa(evento:Event){
   //this.empresa=(<HTMLInputElement>evento.target).value;
  //}


  habilitacionCuadro=false;

  usuRegistrado=true;

  textoDeregistro="No hay nadie registrado"
  
  getRegistrousuario(){
    this.usuRegistrado=false;
  }

  setusuarioRegistrado(evento: Event){
   // alert ("El usuario se acaba de registrar");
   //this.textoDeregistro="El usuario se acaba de registrar"
    //alert(evento.target)
    //debenos castar el objeto html para acceder a sus propiedades
    if((<HTMLInputElement>evento.target).value=="si"){
    this.textoDeregistro="El usuario se acaba registrado";
    }else{
     this.textoDeregistro="El usuario no se ha registrado";
    }
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
