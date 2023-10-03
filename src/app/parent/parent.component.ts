import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  messageToChild!: string;
  msgReceivedFromChild!: string;

  constructor() { }

  ngOnInit(): void {
    this.messageToChild = "Hello Child!";
    console.log('paret: ', this.messageToChild);
  }

  receivedMessageFromchild(event: any) {
    this.msgReceivedFromChild = event;
  }

}
