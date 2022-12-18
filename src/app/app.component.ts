import { Component } from '@angular/core';
import annoncesData from './services/data.json';

export interface Annonce {
  id: number;
  title: string;
  description: string;
  price: number;
  userId: number;
  phone: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }

  annonces: Annonce[] = annoncesData;
}
