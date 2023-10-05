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

  /**
   * Angular life cycle hook
   */
  ngOnInit() {
    console.log('Received Message from Parent: ', this.receivedMessageFromParent);
  }

  /**
   * onclick on button emit the message to parent component
   *
   */
  onclick() {
    this.sendMessageToParent.emit('Hello Parent!');
  }

}
