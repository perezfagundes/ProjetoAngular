import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  v1:any=null;
  v2:any=null;
  resultado:any=null;
  operador:any=null;


 
	exibir(numero:any){
   if(this.v1==null){
     this.v1=numero;
   }
   else{
    if(this.v2==null){
      this.v2=numero;

    }
   }
   console.log(this.v1);
   console.log(this.v2);
  }
    operacao(operador:any){
    if(this.operador=='+'){
      this.resultado=this.v1+this.v2;
    }
   }


}
