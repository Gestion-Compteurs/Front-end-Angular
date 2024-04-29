import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRelevesComponent } from './ajout-releves.component';

describe('AjoutRelevesComponent', () => {
  let component: AjoutRelevesComponent;
  let fixture: ComponentFixture<AjoutRelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutRelevesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutRelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
