import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipo-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  public name: string = 'DefaultName';
  public images: string[];
  public imageSRC : string;

  constructor() {
    this.images =[
      'assets/img/img1.jpg',
      'assets/img/img2.jpg',
      'assets/img/img3.jpg',
    ];
    this.imageSRC=this.images[0];
  }

  ngOnInit(): void {}

  saludo() {
    alert('Hola' + this.name);
  }

  changeRoute(i:number) {
    this.imageSRC=this.images[i];
  }
}
