import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfoInterface } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: InfoInterface = {
    squareDimensions: [0, 0] ,
    initialPosition: [0,0,0],
    currentPosition: [0,0,0],
    movementCommand: []
  }

  private newInfo = new BehaviorSubject<Object>(this.info);

  currentInfo$ = this.newInfo.asObservable();

  constructor() { }

  changeProperty(property: keyof InfoInterface, value: any) {
    this.info[property] = value;
    this.newInfo.next(this.info);
    console.log(this.info);
  }
}
