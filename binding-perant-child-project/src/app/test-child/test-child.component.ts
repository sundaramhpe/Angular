import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

 public name ="";
// Parant to Child binding
 @Input("perantData") public firstName;

 //Child to parant binding
 @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value){
    console.log(value);

  }
  fireEvent(){
    this.childEvent.emit('Hey Sundaram ');
  }

}
