import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lakitu',
  templateUrl: './lakitu.page.html',
  styleUrls: ['./lakitu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LakituPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
