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
  //variaveis que vao ser chamada nas funcoes
  var2=0;
  var1=0;
  numero='number';
  operador='+'
  decimal=false;
  decimals=0;

//exibir numeros e contas 
  exibir(n: number) {
		switch (this.numero) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.var2 = this.var2 + n * Math.pow(10, -this.decimals);
        } else {
          this.var2 = this.var2 * 10 + n;
        }
        break;
      case 'operator':
        this.var2 = n;
        this.numero = 'number';
        break;
      case 'result':
        this.var1 = 0;
        this.var2 = n;
        this.numero = 'number';
    }
  }
  //calculo das contas matematicas 
  operacao(o: string) {
    // console.log('clickOperator inicio');
    this.mostrar();
    this.operador = o
    this.var1 = this.var2;
    this.numero = 'operator';
    // console.log('clickOperator fin');
  }
//exibicao do resultado das contas 
  mostrar(){
    this.var2 = eval('' + this.var1 + this.operador + '(' + this.var2 + ')');
    this.var1 = 0;
    this.numero = 'result';
    this.operador = '+';
    this.decimal = false;
    this.decimals = 0;
  }
  virgula(){
    this.decimal=true
  }
//apagar erros e contas erradas 
  apagar() {
    this.var2 = 0;
    this.var1 = 0;
    this.numero = 'number';
    this.decimal = false;
    this.decimals = 0;
  }

	}

  

 

  



