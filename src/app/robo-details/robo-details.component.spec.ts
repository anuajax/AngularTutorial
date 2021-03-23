import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboDetailsComponent } from './robo-details.component';

describe('RoboDetailsComponent', () => {
  let component: RoboDetailsComponent;
  let fixture: ComponentFixture<RoboDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
