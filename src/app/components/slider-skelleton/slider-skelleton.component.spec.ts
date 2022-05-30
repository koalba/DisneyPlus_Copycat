import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSkelletonComponent } from './slider-skelleton.component';

describe('SliderSkelletonComponent', () => {
  let component: SliderSkelletonComponent;
  let fixture: ComponentFixture<SliderSkelletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderSkelletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSkelletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
