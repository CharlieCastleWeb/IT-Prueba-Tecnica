import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Info } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: Info = {
    squareDimensions: [] ,
    initialPosition: [0,0,''],
    movementCommand: ['','','',''],
    validCommands: false,
    finalPosition: [0,0,'']
  }

  private newInfo = new BehaviorSubject<Object>({});

  currentInfo$ = this.newInfo.asObservable();

  validateInitialPosition() {
    
  }

  constructor() { }
}
