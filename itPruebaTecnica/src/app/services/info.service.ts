import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InfoInterface } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: InfoInterface = {
    squareDimensions: [] ,
    initialPosition: [0,0,''],
    movementCommand: ['','','',''],
    validCommands: false,
    finalPosition: [0,0,'']
  }

  private newInfo = new BehaviorSubject<Object>({});

  currentInfo$ = this.newInfo.asObservable();

  constructor() { }
}
