import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitialPositionComponent } from './initial-position/initial-position.component';
import { MovementCommandsComponent } from './movement-commands/movement-commands.component';
import { ResultsComponent } from './results/results.component';
import { SquareDimensionsComponent } from './square-dimensions/square-dimensions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InitialPositionComponent,
    MovementCommandsComponent,
    ResultsComponent,
    SquareDimensionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
