import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeahterCityComponent } from './weahter-city.component';

describe('WeahterCityComponent', () => {
  let component: WeahterCityComponent;
  let fixture: ComponentFixture<WeahterCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeahterCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeahterCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
