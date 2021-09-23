import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-square-dimensions',
  templateUrl: './square-dimensions.component.html',
  styleUrls: ['./square-dimensions.component.scss']
})
export class SquareDimensionsComponent implements OnInit {

  isDisabled: boolean = false;
  newInfo: any;
  subscription: Subscription | undefined;

  submit() { 
    this.data.changeProperty('squareDimensions', this.newInfo?.squareDimensions);
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