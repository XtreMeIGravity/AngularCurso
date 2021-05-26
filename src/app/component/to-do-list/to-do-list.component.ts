import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';

@Component({
  selector: 'pipo-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public ListCar: Car[] = [];
  public nuevoCar: Car;

  constructor() {
    this.nuevoCar = new Car();
    this.nuevoCar.marca="vw";
    this.nuevoCar.modelo="golf";
  }

  ngOnInit(): void {}

  addToList() {
    let tmp:Car=this.nuevoCar;
    this.ListCar.push(tmp);
  }

  borrar(i: number) {
    if (i > -1) {
      this.ListCar.splice(i, 1);
    }
  }
}
