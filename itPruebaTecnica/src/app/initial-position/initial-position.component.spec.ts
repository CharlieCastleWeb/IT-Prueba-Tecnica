import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPositionComponent } from './initial-position.component';

describe('InitialPositionComponent', () => {
  let component: InitialPositionComponent;
  let fixture: ComponentFixture<InitialPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
