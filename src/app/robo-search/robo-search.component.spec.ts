import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboSearchComponent } from './robo-search.component';

describe('RoboSearchComponent', () => {
  let component: RoboSearchComponent;
  let fixture: ComponentFixture<RoboSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
