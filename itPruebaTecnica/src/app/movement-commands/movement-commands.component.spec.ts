import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementCommandsComponent } from './movement-commands.component';

describe('MovementCommandsComponent', () => {
  let component: MovementCommandsComponent;
  let fixture: ComponentFixture<MovementCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
