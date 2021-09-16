import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square-dimensions',
  templateUrl: './square-dimensions.component.html',
  styleUrls: ['./square-dimensions.component.scss']
})
export class SquareDimensionsComponent implements OnInit {

  newSquareDimensions: number[] = [0,0];

  @Output() infoSquareDimensions = new EventEmitter();

  submit(squareDimensions: any) {
    this.newSquareDimensions = [squareDimensions.value.squareWidth, squareDimensions.value.squareHeight];
    this.infoSquareDimensions.emit(this.newSquareDimensions);
    console.log("Form submitted square dimensions", this.newSquareDimensions); 
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}