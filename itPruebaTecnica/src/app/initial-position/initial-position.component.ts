import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-initial-position',
  templateUrl: './initial-position.component.html',
  styleUrls: ['./initial-position.component.scss']
})
export class InitialPositionComponent implements OnInit {

  isDisabled: boolean = false;
  newInfo: any;
  subscription: Subscription | undefined;

  // position: [number(X), number(Y), number(Orientation)]
  // ORIENTATION 0-N, 1-E, 2-S, 3-W
  setOrientation(orientation: string) {
    switch (orientation){
      case 'N':
        this.newInfo.initialPosition[2] = 0;
        break;
      case 'E':
        this.newInfo.initialPosition[2] = 1;
        break;
      case 'S':
        this.newInfo.initialPosition[2] = 2;
        break;
      case 'W':
        this.newInfo.initialPosition[2] = 3;
        break;
    }
  }

  submit() { 
    this.data.changeProperty('initialPosition', this.newInfo?.initialPosition);
    this.data.changeProperty('initialPosition', [...this.newInfo?.initialPosition]);
    this.isDisabled = true;
  }

  constructor(private data: InfoService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentInfo$.subscribe(info => this.newInfo = info as any);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
