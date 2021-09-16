import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoInterface } from 'src/interfaces/interfaces';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-initial-position',
  templateUrl: './initial-position.component.html',
  styleUrls: ['./initial-position.component.scss']
})
export class InitialPositionComponent implements OnInit {

  newInfo: InfoInterface | undefined;
  subscription: Subscription | undefined;


  /*
  submit(initialPosition: any) {
    this.newInitialPosition =   [initialPosition.value.coordinateX, 
                                initialPosition.value.coordinateY, 
                                initialPosition.value.orientation];
    this.infoInitialPosition.emit(this.newInitialPosition);
    console.log("Form submitted initial position", this.newInitialPosition); 
  }
  */

  constructor(private data: InfoService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentInfo$.subscribe(newInfo => this.newInfo = newInfo as any);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
