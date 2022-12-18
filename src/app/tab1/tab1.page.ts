import { Component, OnInit } from '@angular/core';
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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  annonces: Annonce[] = annoncesData;

  ngOnInit() {}
}
