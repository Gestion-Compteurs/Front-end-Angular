import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCompteursComponent } from './ajout-compteurs.component';

describe('AjoutCompteursComponent', () => {
  let component: AjoutCompteursComponent;
  let fixture: ComponentFixture<AjoutCompteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCompteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutCompteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
