import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {


  @Output() operation = new EventEmitter<string>();
  

  sum() {
    this.operation.emit('sum');
  }

  sub() {
    this.operation.emit('sub');
  }

  mul() {
    this.operation.emit('mul');
  }

  div() {
    this.operation.emit('div');
  }
}