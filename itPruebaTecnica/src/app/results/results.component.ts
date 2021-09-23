import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  newInfo: any;
  subscription: Subscription | any;
  possibleOrientation: string[] = ['N', 'E', 'S', 'W'];
  isDisabled: boolean = false;
  goneOut: boolean = false;
  currentPosition: [number, number, number] = [1,1,1];

  /*
    ORIENTATION 0-N, 1-E, 2-S, 3-W
  */

  validate() {
    this.isDisabled = true;
    this.currentPosition = JSON.parse(JSON.stringify(this.newInfo.initialPosition));
    console.log(this.currentPosition, this.newInfo.initialPosition);
    this.newInfo.movementCommand.forEach((command: string) => {
      if (!this.checkPosition(this.currentPosition[0], 
                              this.currentPosition[1],
                              this.newInfo.squareDimensions)) {
        this.goneOut = true;
        console.log("goneOut"+this.goneOut)
      }
      this.moveCommand(command);
    });
    this.data.changeProperty('currentPosition', this.currentPosition);
  }

  checkPosition(currentX: number, currentY: number, squareDimensions: [number,number]): boolean {
    if (currentX < 0 || 
        currentX > squareDimensions[0]-1 ||
        currentY < 0 || 
        currentY > squareDimensions[0]-1
      ) {
      return false;
    } else {
      return true;
    }
  }

  moveCommand(command: string) {
    if (command == 'A') {
      this.currentPosition = this.advance(this.currentPosition);
      console.log("I advanced, new position = "+this.currentPosition);
    }else if (command == 'L') {
      this.currentPosition[2]--;
      this.currentPosition[2] = this.checkCurrentOrientation(this.currentPosition[2]);
      console.log("I turned left, now looking at ", this.possibleOrientation[this.currentPosition[2]]);
    }else if (command == 'R') {
      this.currentPosition[2]++;
      this.currentPosition[2] = this.checkCurrentOrientation(this.currentPosition[2]);
      console.log("I turned right, now looking at ", this.possibleOrientation[this.currentPosition[2]]);
    }
  }

  checkCurrentOrientation(number: number): number {
    if (number < 0) {
      number = 3;
    } else if (number > 3) {
      number = 0;
    } 
    return number;
  }

  // position: [number(X), number(Y), number(Orientation)]
  advance(position: [number, number, number]) {
    if (position[2] == 0) {
      position[1]++;
    } else if (position[2] == 1) {
      position[0]++;
      console.log(position);
    } else if (position[2] == 2) {
      position[1]--;
      console.log(position);
    } else if (position[2] == 3) {
      position[0]--;
      console.log(position);
    }
    console.log("Se ha ejecutado advance(), posicion actual = "+position);
    return position;
  }
  orientationToLetter(orientation: number): string {
      switch (orientation){
        case 0:
          return 'N';
        case 1:
          return 'E';
        case 2:
          return 'S';

        case 3:
          return 'W';
      }
      return 'error';
  }
  
  constructor(private data: InfoService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentInfo$.subscribe(info => this.newInfo = info as any);
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
