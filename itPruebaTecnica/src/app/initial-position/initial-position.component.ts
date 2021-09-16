import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-initial-position',
  templateUrl: './initial-position.component.html',
  styleUrls: ['./initial-position.component.scss']
})
export class InitialPositionComponent implements OnInit {

  newInitialPosition: any;

  @Output() infoInitialPosition = new EventEmitter();

  submit(initialPosition: any) {
    this.newInitialPosition =   [initialPosition.value.coordinateX, 
                                initialPosition.value.coordinateY, 
                                initialPosition.value.orientation];
    this.infoInitialPosition.emit(this.newInitialPosition);
    console.log("Form submitted initial position", this.newInitialPosition); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
