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
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y2mGm3h9G4X2GckUUV14kgHaE7%26pid%3DApi&f=1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.bCKHQ2YSa3OwdlFy5NEgJAHaEu%26pid%3DApi&f=1',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.FIA0vs9n0BGAiyiw88xRlQHaEo%26pid%3DApi&f=1'
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
