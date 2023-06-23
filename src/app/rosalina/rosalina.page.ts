import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rosalina',
  templateUrl: './rosalina.page.html',
  styleUrls: ['./rosalina.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class RosalinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
