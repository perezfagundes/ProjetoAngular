import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-princesa-peach',
  templateUrl: './princesa-peach.page.html',
  styleUrls: ['./princesa-peach.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PrincesaPeachPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
