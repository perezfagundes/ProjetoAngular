import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-princesa-daisy',
  templateUrl: './princesa-daisy.page.html',
  styleUrls: ['./princesa-daisy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PrincesaDaisyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
