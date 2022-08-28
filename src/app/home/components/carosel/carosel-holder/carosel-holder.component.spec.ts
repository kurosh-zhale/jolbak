import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselHolderComponent } from './carosel-holder.component';

describe('CaroselHolderComponent', () => {
  let component: CaroselHolderComponent;
  let fixture: ComponentFixture<CaroselHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaroselHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaroselHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
