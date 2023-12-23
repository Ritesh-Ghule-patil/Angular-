import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {


  @Input('parElement') element: { type: string, name: string, content: string }
  = {
    type: 'S',
    name: 'fsdf',
    content:"sdfsd content"
  };

  constructor() {
   }

  ngOnInit(): void {
  }

}
