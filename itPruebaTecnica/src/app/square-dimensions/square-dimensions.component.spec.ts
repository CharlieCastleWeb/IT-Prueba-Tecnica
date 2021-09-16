import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareDimensionsComponent } from './square-dimensions.component';

describe('SquareDimensionsComponent', () => {
  let component: SquareDimensionsComponent;
  let fixture: ComponentFixture<SquareDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareDimensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
