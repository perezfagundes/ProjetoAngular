import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shy-guy',
  templateUrl: './shy-guy.page.html',
  styleUrls: ['./shy-guy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterModule]
})
export class ShyGuyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
