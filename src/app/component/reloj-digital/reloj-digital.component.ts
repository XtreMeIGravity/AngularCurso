import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipo-reloj-digital',
  templateUrl: './reloj-digital.component.html',
  styleUrls: ['./reloj-digital.component.css'],
})
export class RelojDigitalComponent implements OnInit {
  time: Date = new Date();

  constructor() {}

  ngOnInit(): void {
    this.timeRequest();
  }

  timeRequest() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    
    
  }


}
