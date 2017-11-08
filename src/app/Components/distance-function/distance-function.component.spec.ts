import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceFunctionComponent } from './distance-function.component';

describe('DistanceFunctionComponent', () => {
  let component: DistanceFunctionComponent;
  let fixture: ComponentFixture<DistanceFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
