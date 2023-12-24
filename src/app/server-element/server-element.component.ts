import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy
{


  @Input('parElement') element: { type: string, name: string, content: string }
  = {
    type: 'S',
    name: 'fsdf',
    content:"sdfsd content"
    };
  
  @Input()name=''

  constructor() {
    console.log('constructor of server-element is called - it call first whenever this comp call or detect some changes');
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy() called...");
    
  }
  ngAfterContentInit(): void {
    console.log("after content init... only call once when initialize component");
    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck() is called whenever angular detect any changes ");
    
  }
  ngOnChanges(changes:SimpleChange) {
    console.log('ngOnChnage is called.. when we want to react any change and then do something with the old value');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit() of server-element is called ');
  }
  

}
