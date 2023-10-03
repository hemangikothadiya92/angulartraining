import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() receivedMessageFromParent!: string;
  @Output() sendMessageToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Received Message from Parent: ', this.receivedMessageFromParent);
  }

  onclick() {
    this.sendMessageToParent.emit('Hello Parent!');
  }

}
