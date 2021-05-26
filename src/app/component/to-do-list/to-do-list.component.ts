import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';

@Component({
  selector: 'pipo-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public ListCar: Car[] = [];
  public nuevoCar: Car = new Car();
  public buttonAddHide = false;
  public buttonEditHide = true;

  constructor() {}

  ngOnInit(): void {}

  addToList() {
    let tmp: Car = this.nuevoCar;
    this.ListCar.push(tmp);
    this.nuevoCar = new Car();
  }
  updateEdit() {
    this.nuevoCar = new Car();
    this.hideUnHide
  }

  editar(i: number) {
    this.nuevoCar = this.ListCar[i];
    this.hideUnHide
  }

  hideUnHide(){
    this.buttonAddHide = !this.buttonAddHide;
    this.buttonEditHide = !this.buttonEditHide;
  }

  borrar(i: number) {
    if (i > -1) {
      this.ListCar.splice(i, 1);
    }
  }
}
