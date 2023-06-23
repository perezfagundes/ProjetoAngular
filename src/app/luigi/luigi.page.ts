import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-luigi',
  templateUrl: './luigi.page.html',
  styleUrls: ['./luigi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class LuigiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
