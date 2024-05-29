import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegieNavbarComponent } from './regie-navbar.component';

describe('RegieNavbarComponent', () => {
  let component: RegieNavbarComponent;
  let fixture: ComponentFixture<RegieNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegieNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegieNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
