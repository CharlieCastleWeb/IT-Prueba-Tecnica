import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movement-commands',
  templateUrl: './movement-commands.component.html',
  styleUrls: ['./movement-commands.component.scss']
})
export class MovementCommandsComponent implements OnInit {

  newMovementCommand: string[] = [];

  submit(movementCommands: any) {
    this.newMovementCommand = [movementCommands.value.movementCommand.split("")];
    
    console.log("Form submitted", this.newMovementCommand); 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
