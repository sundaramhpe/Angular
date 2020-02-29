import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

 public name ="";
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(value){
    console.log(value);

  }

}
