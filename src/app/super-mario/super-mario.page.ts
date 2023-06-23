import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-super-mario',
  templateUrl: './super-mario.page.html',
  styleUrls: ['./super-mario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuperMarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
