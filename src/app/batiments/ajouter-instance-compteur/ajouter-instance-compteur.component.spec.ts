import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInstanceCompteurComponent } from './ajouter-instance-compteur.component';

describe('AjouterInstanceCompteurComponent', () => {
  let component: AjouterInstanceCompteurComponent;
  let fixture: ComponentFixture<AjouterInstanceCompteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterInstanceCompteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterInstanceCompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
