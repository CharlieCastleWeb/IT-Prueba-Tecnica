import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-movement-commands',
  templateUrl: './movement-commands.component.html',
  styleUrls: ['./movement-commands.component.scss']
})
export class MovementCommandsComponent implements OnInit {

  newMovementCommand: string[] = [];
  newInfo: any;
  subscription: Subscription | undefined;
  isDisabled: boolean = false;

  addCommand(command: string) {
    if (command == '-') {
      this.newMovementCommand.pop();
    } else {
      this.newMovementCommand.push(command);
    }
  }

  submit() {
    this.data.changeProperty('movementCommand', this.newMovementCommand);
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
