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
    produtos=[
      {id: 0, nome:'PS4',preco:'R$ 2000',marca:'sony',image:'https://images.pexels.com/photos/3593986/pexels-photo-3593986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {id: 1, nome:'PS5',preco:'R$ 5000',marca:'sony',image:'https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {id: 2, nome:'Polistation',preco:'R$ 200',marca:'Polishop',image:'https://upload.wikimedia.org/wikipedia/commons/6/62/PSOne_Style_Famicom_Clone_adjusted.jpg'},
      {id: 3, nome:'Super Nitendo',preco:'R$ 900',marca:'Nitendo',image:'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {id: 4, nome:'Super Nes',preco:'R$ 250',marca:'Super Tech',image:'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
      {id: 5, nome:'Megadrive',preco:'R$ 800',marca:'polishp',image:'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/07/divulgacao-mega-drive-reproducao-scaled-1280x720.jpg'},
     ];
   
   alertButtons=['OK'];
}
