import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent {
    num1: number = 0;
  num2: number = 0;

  result: number = 0;

  getResult(value: number) {
    this.result = value;
  }
}
