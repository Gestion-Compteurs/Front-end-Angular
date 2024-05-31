import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegieListComponent } from './regie-list.component';

describe('RegieListComponent', () => {
  let component: RegieListComponent;
  let fixture: ComponentFixture<RegieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegieListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
