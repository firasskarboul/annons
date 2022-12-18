import { Component } from '@angular/core';
import annoncesData from '../services/data.json';

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
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  annonces: Annonce[] = annoncesData.filter((x: { userId: string }) => x.userId == '1');

}
