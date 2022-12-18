import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import annoncesData from '../services/data.json';

export interface Annonce {
  id: string;
  title: string;
  description: string;
  price: number;
  userId: string;
  phone: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  annonce: Annonce = {
    id: '',
    title: '',
    description: '',
    price: 0,
    userId: '',
    phone: '',
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let annonce = annoncesData.find((x: { id: string }) => x.id == id);

    this.annonce = annonce
  }

}
