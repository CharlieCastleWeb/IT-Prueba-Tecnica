import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-prueba-tecnica';

  squareDimensions: number[] = [];
  initialPosition: any[] = [];

  public clickedEventSquareDimensions:any;
  public clickedEventInitialPosition:any;

  info:boolean = false;

  receiveInfoSquareDimensions($event: any) {
    this.squareDimensions = $event;
    this.clickedEventSquareDimensions = $event;
    console.log("message received");
    this.info = true;
  }

  receiveInfoInitialPosition($event: any) {
    this.initialPosition = $event;
    this.clickedEventInitialPosition = $event;
    console.log("message received Info Iitial Poisiton");
    this.info = true;
  }


}
